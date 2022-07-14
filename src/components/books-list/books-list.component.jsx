import { Fragment, useContext, useEffect, useCallback, useRef } from "react";
import { BooksContext } from "../../context/books.context";
import BookComponent from "../book/book.component";
import { Masonry } from "@mui/lab";
import { Grid, Hidden } from "@mui/material";

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

    return (
        <Fragment>
            {/* <Grid container spacing={4}>
                {categoryFilteredBookList.map(book => (
                    <Grid item xs={3} key={book.id}>
                        <BookComponent key={book.id} book={book} />
                    </Grid>             
                ))}
            </Grid> */}
            <Hidden smUp>
                <Grid spacing={2}>
                    {categoryFilteredBookList.map(book => (
                        <Grid
                            item
                            spacing={2}
                            key={book.id}
                            style={{
                                paddingTop: '10px',
                                paddingBottom: '10px'
                            }}
                        >
                            <BookComponent key={book.id} book={book} />
                        </Grid>
                    ))}
                </Grid>
            </Hidden>
            <Hidden smDown>
                <Masonry columns={{ sm: 2, md: 3, lg: 4 }} spacing={2}>
                    {categoryFilteredBookList.map(book => (
                        <BookComponent key={book.id} book={book} />
                    ))}
                </Masonry>
            </Hidden>

            {
                (infiniteScrollEnable) ?
                    <div /> :
                    <div ref={loader} />
            }
        </Fragment>
    )
}

export default BooksList;