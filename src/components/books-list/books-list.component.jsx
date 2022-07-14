import { Fragment, useContext, useEffect, useCallback, useRef } from "react";
import { BooksContext } from "../../context/books.context";
import BookComponent from "../book/book.component";
import { Masonry } from "@mui/lab";

const BooksList = ({ infiniteScrollEnable }) => {

    const { categoryFilteredBookList, setPage, isLoading, isFullPageLoading } = useContext(BooksContext);
    const loader = useRef(null);

    const handleObserver = useCallback((entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
            setPage((prev) => prev + 1);
        }
    }, []);

    useEffect(() => {
        const option = {
            root: null,
            rootMargin: "20px",
            threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (loader.current) observer.observe(loader.current);
    }, [handleObserver]);

    // console.log(`isLoading is ${isLoading} & isFullPageLoading is ${isFullPageLoading}`);

    return (
        <Fragment>
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
                {categoryFilteredBookList.map(book => (
                    <BookComponent key={book.id} book={book} />
                ))}
            </Masonry>
            {
                (infiniteScrollEnable) ?
                    <div /> :
                    <div ref={loader} />
            }
        </Fragment>
    )
}

export default BooksList;