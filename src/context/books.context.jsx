import { createContext, useState, useEffect } from "react";

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
        isLoading: true,
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

    useEffect(() => {
        fetchBooks();
    }, [page, categorySelected]);

    useEffect(() => {
        if (submitSearch !== true) {
            window.addEventListener("scroll", handleScroll);
        }
    }, []);

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
                setBookList((oldBooksList) => {
                    if (page === 1 && bookResults !== []) {
                        return bookResults;
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