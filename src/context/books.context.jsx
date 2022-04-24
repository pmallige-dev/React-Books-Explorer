import { createContext, useState, useEffect } from "react";

export const BooksContext = createContext({
    page: 1,
    isLoading: true,
    searchField: '',
    bookList: [],
    filteredBookList: [],
})

export const BooksProvider = ({ children }) => {

    const [page, setPage] = useState(1);
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
        storingAPIDataInSessionAndSettingBookList(bookResults, setBookList);
        // setIsFirstLoad(false);
        setIsLoading(false);
    };

    const storingAPIDataInSessionAndSettingBookList = (bookResults, setBookList) => {
        window.sessionStorage.setItem(`bookResultsSessionPage${page}`, JSON.stringify(bookResults));
        const newGetSessionStoredAPIData = JSON.parse(window.sessionStorage.getItem(`bookResultsSessionPage${page}`)) || [];
        if (bookList.length == 0)
            setBookList(newGetSessionStoredAPIData);
        else
            setBookList(bookList => bookList.concat(newGetSessionStoredAPIData));
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
        // setPage(page + 1);
        setFilteredBookList(NewFilteredBookList);
    }, [bookList, searchField]);

    useEffect(() => {
        setPage(page + 1)
    }, [searchField])

    const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
    };

    const value = {
        page,
        searchField,
        bookList,
        filteredBookList,
        onSearchChange,
        isLoading
    }

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>

}