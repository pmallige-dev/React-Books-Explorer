import { createContext, useState, useEffect } from "react";
import { categories } from '../data/categories'

export const BooksContext = createContext({
    page: 1,
    isLoading: true,
    searchField: '',
    bookList: [],
    filteredBookList: [],
    categorySelected: '',
    isSearchSubmit: false,
    searchBtnClose: false
})

export const BooksProvider = ({ children }) => {

    const initialState = {
        page: 1,
        isLoading: true,
        searchField: '',
        bookList: [],
        filteredBookList: [],
        categorySelected: '',
        isSearchSubmit: false,
        searchBtnClose: false
    }

    const [page, setPage] = useState(initialState.page);
    const [isLoading, setIsLoading] = useState(initialState.isLoading);
    const [isFullPageLoading, setIsFullPageLoading] = useState(initialState.isLoading);
    const [searchField, setSearchField] = useState(initialState.searchField);
    const [categoryBookList, setCategoryBookList] = useState(initialState.bookList);
    const [searchBookList, setSearchBookList] = useState(initialState.bookList);
    const [categoryFilteredBookList, setCategoryFilteredBookList] = useState(initialState.bookList);
    const [searchFilteredBookList, setSearchFilteredBookList] = useState(initialState.bookList);
    const [categorySelected, setCategorySelected] = useState(initialState.categorySelected);
    const [isSearchSubmit, setIsSearchSubmit] = useState(initialState.isSearchSubmit);
    const [searchBtnClose, setSearchBtnClose] = useState(initialState.searchBtnClose);

    const mainUrl = `https://gutendex.com/books`;
    const urlSearchParams = `?search=${searchField}`;
    const urlSearchParamsForCategory = `?search=${searchField}&topic=${categorySelected}`;
    const urlCategoryParams = `/?page=${page}&topic=${categorySelected}`;
    const windowUrl = window.location.href;

    // To fetch Books 
    useEffect(() => {
        setIsLoading(initialState.isLoading);
        fetchBooks();
    }, [page, categorySelected]);

    // To set the category selected as the category we see in the URL so that the respective books are displayed upon page load/refresh
    useEffect(() => {
        categories.map((category) => {
            if (windowUrl.includes(category.title)) {
                setCategorySelected(category.title);
            }
        })
    }, []);

    // To display list of books based on Category Selected
    useEffect(() => {
        const NewFilteredBookList = categoryBookList.filter((book) => {
            return book.title.toLocaleLowerCase();
        });
        setCategoryFilteredBookList(NewFilteredBookList);
    }, [categoryBookList]);

    // To display list of books based on Search
    useEffect(() => {
        const NewFilteredBookList = searchBookList.filter((book) => {
            return book.title.toLocaleLowerCase();
        });
        setSearchFilteredBookList(NewFilteredBookList);
    }, [searchBookList]);

    const fetchBooks = async () => {
        try {
            if (categorySelected !== '') {
                const fetchUrl = await fetch(`${mainUrl}${urlCategoryParams}`);
                const response = await fetchUrl.json();
                const bookResults = await response.results;

                setCategoryBookList((oldBooksList) => {
                    if (page === 1 && bookResults !== []) {
                        return bookResults
                    } else {
                        return [...oldBooksList, ...bookResults]
                    }
                })
            } else {
                return
            }
            setIsLoading(false);
            setIsFullPageLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const fetchingBooksFromAPIBasedOnSearch = async () => {
        const fetchUrl = await fetch(`${mainUrl}${urlSearchParams}`);
        const response = await fetchUrl.json();
        let bookSearchresults = await response.results;
        setSearchBookList(bookSearchresults);
        setIsFullPageLoading(false);
    }

    const fetchingBooksFromAPIBasedOnSearchAndCategory = async () => {
        const fetchUrl = await fetch(`${mainUrl}${urlSearchParamsForCategory}`);
        const response = await fetchUrl.json();
        let bookSearchresults = await response.results;
        setSearchBookList(bookSearchresults);
        setIsFullPageLoading(false);
    }

    const handleScroll = () => {
        if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight) {
            setPage(page + 1);
        }
    };

    const onCategorySelected = (category) => {
        setCategoryBookList(initialState.bookList)
        setPage(initialState.page)
        setIsLoading(initialState.isLoading);
        setIsFullPageLoading(initialState.isLoading);
        setCategorySelected(category.replace(' ', '%20'));
    }

    const onInputChange = (event) => {
        const searchFieldString = event.target.value.replace(' ', '%20');
        setSearchField(searchFieldString);
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        setIsFullPageLoading(initialState.isLoading);
        setIsSearchSubmit(true);
        setSearchBtnClose(initialState.searchBtnClose);
        fetchingBooksFromAPIBasedOnSearch();
    };

    const onGenreSearchSubmit = (event) => {
        event.preventDefault();
        setIsFullPageLoading(true);
        setIsSearchSubmit(true);
        setSearchBtnClose(initialState.searchBtnClose);
        setPage(initialState.page);
        fetchingBooksFromAPIBasedOnSearchAndCategory();
    };

    const onSearchBookListCompLoad = () => {
        setIsSearchSubmit(initialState.isSearchSubmit);
    }

    const onSearchBtnCloseClick = () => {
        setSearchBtnClose(true);
        setIsSearchSubmit(initialState.isSearchSubmit);
    }

    const resetSearchWithCategorySelected = () => {
        setCategoryBookList(initialState.bookList);
        setPage(initialState.page);
        setIsFullPageLoading(initialState.isLoading);
        fetchBooks();
    }

    const value = {
        page,
        searchField,
        categoryBookList,
        searchBookList,
        categoryFilteredBookList,
        searchFilteredBookList,
        categorySelected,
        onCategorySelected,
        onInputChange,
        onSearchSubmit,
        onGenreSearchSubmit,
        onSearchBookListCompLoad,
        isLoading,
        isFullPageLoading,
        isSearchSubmit,
        setIsSearchSubmit,
        handleScroll,
        searchBtnClose,
        onSearchBtnCloseClick,
        resetSearchWithCategorySelected
    }

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>

}