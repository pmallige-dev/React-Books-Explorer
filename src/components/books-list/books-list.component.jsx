import { useContext, useEffect } from "react";
import { BooksContext } from "../../context/books.context";
import BookComponent from "../book/book.component";
import { Masonry } from "@mui/lab";

const BooksList = () => {

    const { categoryFilteredBookList, handleScroll } = useContext(BooksContext);

    const windowScrollhandler = handleScroll;

    useEffect(() => {
        window.addEventListener("scroll", windowScrollhandler);

        return () => {
            window.removeEventListener("scroll", windowScrollhandler);
        }
    }, []);

    return (
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
            {categoryFilteredBookList.map(book => (
                <BookComponent key={book.id} book={book} />
            ))}
        </Masonry>
    )
}

export default BooksList;