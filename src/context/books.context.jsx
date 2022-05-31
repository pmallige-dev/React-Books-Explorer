import { createContext, useState, useEffect } from "react";
import { categories } from '../data/categories'

export const BooksContext = createContext({
    page: 1,
    isLoading: true,
    searchField: '',
    bookList: [],
    filteredBookList: [],
})

export const BooksProvider = ({ children }) => {

    const initialState = {
        page: 1,
        isLoading: false,
        searchField: '',
        bookList: [],
        filteredBookList: [],
        categorySelected: '',
        submitSearch: false,
    }

    const [page, setPage] = useState(initialState.page);
    const [isLoading, setIsLoading] = useState(initialState.isLoading);
    const [searchField, setSearchField] = useState(initialState.searchField);
    const [bookList, setBookList] = useState(initialState.bookList);
    const [filteredBookList, setFilteredBookList] = useState(initialState.bookList);
    const [categorySelected, setCategorySelected] = useState(initialState.categorySelected);
    const [submitSearch, setSubmitSearch] = useState(initialState.submitSearch);

    const mainUrl = `https://gutendex.com/books`;
    const urlSearchParams = `?search=${searchField}&topic=${categorySelected}`;
    const urlCategoryParams = `/?page=${page}&topic=${categorySelected}`;
    const windowUrl = window.location.href;   
   

    // To fetch Books 
    useEffect(() => {
        fetchBooks();  
    }, [page, categorySelected]);

    // To set the category selected as the category we see in the URL so that the respective books are displayed upon page load/refresh
    useEffect(() => {
        categories.map((category) => {
            if(windowUrl.includes(category.title)) {
                setCategorySelected(category.title);
            }
        })
    }, []);

    // To achieve infinite scroll
    useEffect(() => {
        // TODO - Fix the submit search infinite scroll issue
        if (submitSearch === false) {
            window.addEventListener("scroll", handleScroll);
            setIsLoading(true);
        }
    }, []);

    // To display list of books
    useEffect(() => {
        const NewFilteredBookList = bookList.filter((book) => {
            return book.title.toLocaleLowerCase();
        });
        setFilteredBookList(NewFilteredBookList);
    }, [bookList]);
    
    const fetchBooks = async () => {
        try {
            if (categorySelected !== '') {
                const fetchUrl = await fetch(`${mainUrl}${urlCategoryParams}`);
                const response = await fetchUrl.json();
                const bookResults = await response.results;

                locallyStoreFirstPageAPIResults(bookResults);

                setBookList((oldBooksList) => {
                    if (page === 1 && bookResults !== []) {
                        return getLocallyStoredFirstPageAPIResults()
                    } else {
                        return [...oldBooksList, ...bookResults]
                    }
                })
            } else {
                return
            }
        } catch (error) {
            console.log(error);
        }
    }

    const fetchingBooksFromAPIBasedOnSearch = async () => {
        const fetchUrl = await fetch(`${mainUrl}${urlSearchParams}`);
        const response = await fetchUrl.json();
        const bookSearchresults = await response.results;
        setBookList(bookSearchresults);
    }

    const locallyStoreFirstPageAPIResults = (bookResults) => {
        window.localStorage.setItem(`bookResultsLocalStore${categorySelected}`, JSON.stringify(bookResults));
    }

    const getLocallyStoredFirstPageAPIResults = () => {
        const getLocalStoredAPIData = JSON.parse(window.localStorage.getItem(`bookResultsLocalStore${categorySelected}`)) || [];
        return getLocalStoredAPIData;
    }

    const handleScroll = () => {
        if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight) {
            setPage(page + 1);
        }
    };

    const onCategorySelected = (category) => {
        setBookList(initialState.bookList)
        setPage(initialState.page)
        setCategorySelected(category.replace(' ', '%20'));
    }

    const onInputChange = (event) => {
        const searchFieldString = event.target.value.replace(' ', '%20');
        setSearchField(searchFieldString);
        setSubmitSearch(true);
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        fetchingBooksFromAPIBasedOnSearch();
        setSubmitSearch(true);
    };

    const value = {
        page,
        searchField,
        bookList,
        filteredBookList,
        onCategorySelected,
        onInputChange,
        onSearchSubmit,
        isLoading
    }

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>

}