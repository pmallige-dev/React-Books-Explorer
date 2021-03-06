import axios from "axios";
import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router";
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
        displaySearchField: '',
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
        genreSearchBtnClose: false,
        homePageLoad: false,
        searchStringNotFound: false,
        booksNotFound: false,
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
    const [genreSearchBtnClose, setGenreSearchBtnClose] = useState(initialState.genreSearchBtnClose);
    const [homePageLoad, setHomePageLoad] = useState(initialState.homePageLoad);
    const [searchStringNotFound, setSearchStringNotFound] = useState(initialState.searchStringNotFound);
    const [booksNotFound, setBooksNotFound] = useState(initialState.booksNotFound);

    const mainUrl = `https://gutendex.com/books`;
    const urlSearchParams = `?search=${searchField}`;
    const urlSearchParamsForCategory = `?search=${searchField}&topic=${categorySelected}`;
    const urlCategoryParams = `/?page=${page}&topic=${categorySelected}`;
    const windowUrl = decodeURI(window.location.href);
    const navigate = useNavigate();
    let searchFieldString = '';

    // To fetch Books 
    useEffect(() => {
        fetchBooks();
    }, [page, categorySelected]);

    // To set the category selected as the category we see in the URL so that the respective books are displayed upon page load/refresh
    useEffect(() => {
        getAndSetStateSessionStoredCategorySelected(setCategorySelected);
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
            if (categorySelected !== '' && (nextPageStatus || page === 1)) {
                setIsLoading(initialState.isLoading);
                try {
                    const fetchUrl = await axios.get(`${mainUrl}${urlCategoryParams}`);
                    const nextPageUrl = await fetchUrl.data.next;
                    const bookResults = await fetchUrl.data.results;

                    if (nextPageUrl === null) {
                        setNextPageStatus(false);
                        if (page >= 2)
                            setPage(initialState.page);
                    } else {
                        setNextPageStatus(initialState.nextPageStatus);
                    }

                    setBooksNotFound(initialState.booksNotFound);

                    setCategoryBookList((oldBooksList) => {
                        if (page === 1 && bookResults !== []) {
                            return bookResults
                        } else {
                            return [...oldBooksList, ...bookResults]
                        }
                    })
                } catch (error) {
                    const errorResponse = error.response;
                    if (errorResponse.status === 404) {
                        setBooksNotFound(true);
                    }
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
        const fetchUrl = await axios.get(`${mainUrl}${urlSearchParams}`);
        let bookSearchresults = await fetchUrl.data.results;
        const bookCount = await fetchUrl.data.count;
        if (bookCount === 0) {
            setSearchStringNotFound(true);
        } else {
            setSearchStringNotFound(initialState.searchStringNotFound);
        }
        setSearchBookList(bookSearchresults);
        setIsFullPageLoading(false);
    }

    const fetchingBooksFromAPIBasedOnSearchAndCategory = async () => {
        const fetchUrl = await axios.get(`${mainUrl}${urlSearchParamsForCategory}`);
        let bookSearchresults = await fetchUrl.data.results;
        const bookCount = await fetchUrl.data.count;
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
        sessionStorage.setItem('sessionStoredCategory', category);
        getAndSetStateSessionStoredCategorySelected(setCategorySelected);
    }

    const onInputChange = (event) => {
        searchFieldString = event.target.value.replace(' ', '%20');
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
        navigate(`/searchGenre/${searchField}`);
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

    const onGenreSearchBtnCloseClick = () => {
        setSearchBtnClose(true);
        navigate(`/genre/${categorySelected}`);
        setIsSearchSubmit(initialState.isSearchSubmit);
        window.scrollTo(0, 0);
    }

    const resetSearchWithCategorySelected = () => {
        setCategoryBookList(initialState.categoryBookList);
        setPage(initialState.page);
        setIsFullPageLoading(initialState.isFullPageLoading);
        setGenreSearchBtnClose(true);
        fetchBooks();
    }

    function getAndSetStateSessionStoredCategorySelected(setCategorySelected) {
        if (sessionStorage.getItem('sessionStoredCategory')) {
            let sessionStoredCategory = sessionStorage.getItem('sessionStoredCategory');
            let categorySpaceReplaced = sessionStoredCategory.replace(' ', '%20');
            setCategorySelected(categorySpaceReplaced);
        }
    }

    const value = {
        page,
        setPage,
        searchField,
        categoryBookList,
        setCategoryBookList,
        searchBookList,
        setSearchBookList,
        categoryFilteredBookList,
        searchFilteredBookList,
        categorySelected,
        onCategorySelected,
        onInputChange,
        onSearchSubmit,
        onGenreSearchSubmit,
        onGenreSearchBtnCloseClick,
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
        searchStringNotFound,
        booksNotFound,
        setBooksNotFound
    }

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>

}