import { createContext, useState, useEffect } from "react";

export const BooksContext = createContext({
    page: 1,
    setPage: () => null,
    searchField: '',
    setSearchField: () => null,
    bookList: [],
    setBookList: () => null,
    filteredBookList: [],
    setFilteredBookList: () => null,
})

export const BooksProvider = ({ children }) => {

    const [page, setPage] = useState(1);
    const [searchField, setSearchField] = useState('');
    const [bookList, setBookList] = useState([]);
    const [filteredBookList, setFilteredBookList] = useState(bookList);

    useEffect(() => {
        const fetchBooks = async () => {
            const fetchUrl = await fetch(`http://skunkworks.ignitesol.com:8000/books/?page=${page}`);
            const response = await fetchUrl.json();
            const bookResults = await response.results;
            setBookList(bookResults);
        };
        fetchBooks();
    }, [setPage, page]);

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

    const onInfiniteScroll = (event) => {
        const pageNumber = page;
        if (event)
            setPage(pageNumber++)
    }

    const value = {
        page,
        setPage,
        searchField,
        setSearchField,
        bookList,
        setBookList,
        filteredBookList,
        setFilteredBookList,
        onSearchChange
    }

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>

}