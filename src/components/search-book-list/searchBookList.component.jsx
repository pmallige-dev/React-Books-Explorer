import { useContext, useEffect } from "react";
import BookComponent from "../book/book.component";
import { BooksContext } from "../../context/books.context";
import Masonry from "@mui/lab/Masonry";

const SearchBookList = () => {

    const { searchFilteredBookList, handleScroll } = useContext(BooksContext);

    const windowScrollhandler = handleScroll;

    useEffect(() => {
        window.removeEventListener("scroll", windowScrollhandler);
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