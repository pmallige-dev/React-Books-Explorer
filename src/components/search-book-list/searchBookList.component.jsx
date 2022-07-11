import { useContext, useEffect } from "react";
import BooksList from "../books-list/books-list.component";
import BookComponent from "../book/book.component";
import { BooksContext } from "../../context/books.context";
import Masonry from "@mui/lab/Masonry";

const SearchBookList = ({ homePageSearch }) => {

    const { searchFilteredBookList, onSearchBookListCompLoad, handleScroll } = useContext(BooksContext);

    const searchBooklistCompLoadHandler = onSearchBookListCompLoad;
    const windowScrollhandler = handleScroll;

    useEffect(() => {
        window.removeEventListener("scroll", windowScrollhandler);
        console.log('Search Booklist useEffect triggered');
        // if(!homePageSearch)
        //     searchBooklistCompLoadHandler()
    }, [])

    return (
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
            {searchFilteredBookList.map(book => (
                <BookComponent key={book.id} book={book} />
            ))}
        </Masonry>
    )
}

export default SearchBookList;