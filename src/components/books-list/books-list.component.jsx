import { useContext, useEffect } from "react";
import { BooksContext } from "../../context/books.context";
import BookComponent from "../book/book.component";
import { Masonry } from "@mui/lab";

const BooksList = ({ infiniteScrollEnable }) => {

    const { categoryFilteredBookList, page, setPage } = useContext(BooksContext);

    const handleScroll = () => {
        if (Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight && infiniteScrollEnable) {
            setPage(page + 1);
            console.log(`Handle Scroll IF CASE triggered and Page is ${page}`);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
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