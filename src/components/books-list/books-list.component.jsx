import { useContext } from "react";
import { BooksContext } from "../../context/books.context";
import BookComponent from "../book/book.component";
import { Grid } from "@mui/material";

const BooksList = () => {

    const { filteredBookList } = useContext(BooksContext);

    return (
        <Grid container spacing={4}>
            {filteredBookList.map(book => (
                <Grid item xs={3} key={book.id}>
                    <BookComponent key={book.id} book={book} />
                </Grid>
            )
            )}
        </Grid>
    )
}

export default BooksList;