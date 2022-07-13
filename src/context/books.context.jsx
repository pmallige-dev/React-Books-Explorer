import { createContext, useState, useEffect } from "react";
import { allCategories } from "../data/allCategories";

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
        nextPageStatus: true,
        isLoading: true,
        isFullPageLoading: true,
        searchField: '',
        bookList: [],
        categoryBookList: [],
        searchBookList: [],
        filteredBookList: [],
        categoryFilteredBookList: [],
        searchFilteredBookList: [],
        categorySelected: '',
        isSearchSubmit: false,
        homePageSearchSubmit: false,
        genrePageSearchSubmit: false,
        searchBtnClose: false,
        homePageLoad: false,
        searchStringNotFound: false,
    }

    const [page, setPage] = useState(initialState.page);
    const [nextPageStatus, setNextPageStatus] = useState(initialState.nextPageStatus);
    const [isLoading, setIsLoading] = useState(initialState.isLoading);
    const [isFullPageLoading, setIsFullPageLoading] = useState(initialState.isFullPageLoading);
    const [searchField, setSearchField] = useState(initialState.searchField);
    const [categoryBookList, setCategoryBookList] = useState(initialState.categoryBookList);
    const [searchBookList, setSearchBookList] = useState(initialState.searchBookList);
    const [categoryFilteredBookList, setCategoryFilteredBookList] = useState(initialState.categoryFilteredBookList);
    const [searchFilteredBookList, setSearchFilteredBookList] = useState(initialState.searchFilteredBookList);
    const [categorySelected, setCategorySelected] = useState(initialState.categorySelected);
    const [isSearchSubmit, setIsSearchSubmit] = useState(initialState.isSearchSubmit);
    const [homePageSearchSubmit, setHomePageSearchSubmit] = useState(initialState.homePageSearchSubmit);
    const [genrePageSearchSubmit, setGenrePageSearchSubmit] = useState(initialState.genrePageSearchSubmit);
    const [searchBtnClose, setSearchBtnClose] = useState(initialState.searchBtnClose);
    const [homePageLoad, setHomePageLoad] = useState(initialState.homePageLoad);
    
    const [searchStringNotFound, setSearchStringNotFound] = useState(initialState.searchStringNotFound);

    const mainUrl = `https://gutendex.com/books`;
    const urlSearchParams = `?search=${searchField}`;
    const urlSearchParamsForCategory = `?search=${searchField}&topic=${categorySelected}`;
    const urlCategoryParams = `/?page=${page}&topic=${categorySelected}`;
    const windowUrl = decodeURI(window.location.href);

    // To fetch Books 
    useEffect(() => {
        fetchBooks();
    }, [page, categorySelected]);

    // To set the category selected as the category we see in the URL so that the respective books are displayed upon page load/refresh
    useEffect(() => {
        allCategories.map((category) => {
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
            if (categorySelected !== '' && nextPageStatus) {
                setIsLoading(initialState.isLoading);
                try {
                    const fetchUrl = await fetch(`${mainUrl}${urlCategoryParams}`);
                    console.log(fetchUrl);
                    const response = await fetchUrl.json();
                    const nextPageUrl = await response.next;
                    const bookResults = await response.results;

                    if (nextPageUrl === null) {
                        setNextPageStatus(false);
                        if (page >= 2)
                            setPage(initialState.page);
                    } else {
                        setNextPageStatus(initialState.nextPageStatus);
                    }

                    setCategoryBookList((oldBooksList) => {
                        if (page === 1 && bookResults !== []) {
                            return bookResults
                        } else {
                            return [...oldBooksList, ...bookResults]
                        }
                    })
                } catch (error) {
                    console.log(error);
                }
            } else {
                return
            }
            setIsLoading(false);
            setIsFullPageLoading(false);
        } catch (error) {
            console.log(error);
            // if (error.contains('TypeError: Failed to fetch')) {
            //     console.log('Do something');
            // }
        }
    }

    const fetchingBooksFromAPIBasedOnSearch = async () => {
        const fetchUrl = await fetch(`${mainUrl}${urlSearchParams}`);
        const response = await fetchUrl.json();
        let bookSearchresults = await response.results;
        const bookCount = await response.count;
        if (bookCount === 0) {
            setSearchStringNotFound(true);
        } else {
            setSearchStringNotFound(initialState.searchStringNotFound);
        }
        setSearchBookList(bookSearchresults);
        setIsFullPageLoading(false);
    }

    const fetchingBooksFromAPIBasedOnSearchAndCategory = async () => {
        const fetchUrl = await fetch(`${mainUrl}${urlSearchParamsForCategory}`);
        const response = await fetchUrl.json();
        let bookSearchresults = await response.results;
        const bookCount = await response.count;
        if (bookCount === 0) {
            setSearchStringNotFound(true);
        } else {
            setSearchStringNotFound(initialState.searchStringNotFound);
        }
        setSearchBookList(bookSearchresults);
        setIsFullPageLoading(false);
    }

    const onCategorySelected = (category) => {
        window.scrollTo(0, 0);
        setCategoryBookList(initialState.categoryBookList);
        setPage(initialState.page);
        setIsLoading(initialState.isLoading);
        setIsFullPageLoading(initialState.isFullPageLoading);
        setNextPageStatus(initialState.nextPageStatus);
        setCategorySelected(category.replace(' ', '%20'));
    }

    const onInputChange = (event) => {
        const searchFieldString = event.target.value.replace(' ', '%20');
        setSearchField(searchFieldString);
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        setIsFullPageLoading(initialState.isFullPageLoading);
        setIsSearchSubmit(true);
        setHomePageSearchSubmit(true);
        setGenrePageSearchSubmit(initialState.genrePageSearchSubmit);
        setSearchBtnClose(initialState.searchBtnClose);
        fetchingBooksFromAPIBasedOnSearch();
    };

    const onGenreSearchSubmit = (event) => {
        event.preventDefault();
        setIsFullPageLoading(true);
        setIsSearchSubmit(true);
        setHomePageSearchSubmit(initialState.homePageSearchSubmit);
        setGenrePageSearchSubmit(true)
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
        window.scrollTo(0, 0);
    }

    const resetSearchWithCategorySelected = () => {
        setCategoryBookList(initialState.categoryBookList);
        setPage(initialState.page);
        setIsFullPageLoading(initialState.isFullPageLoading);
        fetchBooks();
    }

    const value = {
        page,
        setPage,
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
        homePageSearchSubmit,
        genrePageSearchSubmit,
        setIsSearchSubmit,
        searchBtnClose,
        onSearchBtnCloseClick,
        resetSearchWithCategorySelected,
        homePageLoad,
        setHomePageLoad,
        searchStringNotFound
    }

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>

}