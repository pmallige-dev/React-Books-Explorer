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
        isLoading: true,
        searchField: '',
        bookList: [],
        filteredBookList: [],
        categorySelected: '',
        isSearchSubmit: false,
    }

    const [page, setPage] = useState(initialState.page);
    const [isLoading, setIsLoading] = useState(initialState.isLoading);
    const [searchField, setSearchField] = useState(initialState.searchField);
    const [bookList, setBookList] = useState(initialState.bookList);
    const [filteredBookList, setFilteredBookList] = useState(initialState.bookList);
    const [categorySelected, setCategorySelected] = useState(initialState.categorySelected);
    const [isSearchSubmit, setIsSearchSubmit] = useState(initialState.isSearchSubmit);

    const mainUrl = `https://gutendex.com/books`;
    const urlSearchParams = `?search=${searchField}&topic=${categorySelected}`;
    const urlCategoryParams = `/?page=${page}&topic=${categorySelected}`;

    // let submitSearch = false;
    const windowUrl = window.location.href;
    const infiniteScrollCheck = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight;


    // To fetch Books 
    useEffect(() => {
        setIsLoading(true)
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

    // // To achieve infinite scroll
    // useEffect(() => {
    //     // TODO - Fix the submit search infinite scroll issue       
    //     window.addEventListener("scroll", handleScroll);
    // }, []);

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

                setBookList((oldBooksList) => {
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
        } catch (error) {
            console.log(error);
        }
    }

    const fetchingBooksFromAPIBasedOnSearch = async () => {
        const fetchUrl = await fetch(`${mainUrl}${urlSearchParams}`);
        const response = await fetchUrl.json();
        let bookSearchresults = await response.results;
        // if (bookSearchresults.length > 8) {
        //     bookSearchresults = bookSearchresults.slice(0, 8);
        //     setBookList(bookSearchresults);
        // } else {
            setBookList(bookSearchresults);
        // }
        setIsLoading(false);
    }

    const handleScroll = () => {
        if (infiniteScrollCheck) {
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
    }

    const onSearchSubmit = (event) => {
        event.preventDefault();
        setIsLoading(true);
        setIsSearchSubmit(true);
        fetchingBooksFromAPIBasedOnSearch();
    };

    const onSearchBookListCompLoad = () => {
        setIsSearchSubmit(false);
    }

    const value = {
        page,
        searchField,
        bookList,
        filteredBookList,
        onCategorySelected,
        onInputChange,
        onSearchSubmit,
        onSearchBookListCompLoad,
        isLoading,
        isSearchSubmit,
        handleScroll
    }

    return <BooksContext.Provider value={value}>{children}</BooksContext.Provider>

}