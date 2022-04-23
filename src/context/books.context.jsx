import { createContext, useState, useEffect } from "react";

export const BooksContext = createContext({
    page: 1,
    setPage: () => null,
    isFirstLoad: true,
    setIsFirstLoad: () => null,
    isLoading: true,
    setIsLoading: () => null,
    searchField: '',
    setSearchField: () => null,
    bookList: [],
    setBookList: () => null,
    filteredBookList: [],
    setFilteredBookList: () => null,
})

export const BooksProvider = ({ children }) => {

    const [page, setPage] = useState(1);
    const [isFirstLoad, setIsFirstLoad] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [searchField, setSearchField] = useState('');
    const [bookList, setBookList] = useState([]);
    const [filteredBookList, setFilteredBookList] = useState(bookList);

    useEffect(() => {
        fetchBooks();
        window.addEventListener("scroll", handleScroll);
    }, [page]);

    const fetchBooks = async () => {
        const bookResults = await fetchingBooksFromAPI(page);
        storingAPIDataInSession(bookResults, setBookList);
        setIsFirstLoad(false);
        setIsLoading(false);
    };

    const storingAPIDataInSession = (bookResults, setBookList) => {
        window.sessionStorage.setItem(`bookResultsSessionPage${page}`, JSON.stringify(bookResults));
        const newGetSessionStoredAPIData = JSON.parse(window.sessionStorage.getItem(`bookResultsSessionPage${page}`)) || [];
        if (bookList.length == 0) {
            setBookList(newGetSessionStoredAPIData);
        }
        else {
            setBookList(bookList => bookList.concat(newGetSessionStoredAPIData));
        }
    }

    const fetchingBooksFromAPI = async (page) => {
        const fetchUrl = await fetch(`http://skunkworks.ignitesol.com:8000/books/?page=${page}`);
        const response = await fetchUrl.json();
        const bookResults = await response.results;
        return bookResults;
    }

    const handleScroll = () => {
        if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight) {
            setPage(page + 1);
        }
    };

    useEffect(() => {
        const NewFilteredBookList = bookList.filter((book) => {
            return book.title.toLocaleLowerCase().includes(searchField);
        });
        setFilteredBookList(NewFilteredBookList);
    }, [bookList, searchField]);

    const onSearchChange = (event) => {
        console.log(event);
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    const value = {
        page,
        setPage,
        searchField,
        setSearchField,
        bookList,
        setBookList,
        filteredBookList,
        setFilteredBookList,
        onSearchChange,
        isLoading
    }

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>

}