import { useContext } from "react";
import { BooksContext } from "../../context/books.context";
import BookComponent from "../book/book.component";
import { Grid } from "@mui/material";
import { Masonry } from "@mui/lab";

const BooksList = () => {

    const { filteredBookList } = useContext(BooksContext);

    return (
        <Masonry columns={4} spacing={2}>
            {filteredBookList.map(book => (
                // <Grid item xs={3} key={book.id}>
                    <BookComponent key={book.id} book={book} />
                // </Grid>
            )
            )}
        </Masonry>
    )
}

export default BooksList;