import { useContext, useEffect } from "react";
import BooksList from "../books-list/books-list.component";
import { BooksContext } from "../../context/books.context";

const SearchBookList = () => {

    const { onSearchBookListCompLoad, handleScroll } = useContext(BooksContext);

    const searchBooklistCompLoadHandler = onSearchBookListCompLoad;
    const windowScrollhandler = handleScroll;

    useEffect(() => {
        window.removeEventListener("scroll", windowScrollhandler);
        searchBooklistCompLoadHandler()
    }, [])

    return (
        <div>
            <BooksList />
        </div>
    )
}

export default SearchBookList;