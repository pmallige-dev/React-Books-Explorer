import { useContext } from "react";
import { BooksContext } from "../../context/books.context";
import BookComponent from "../book/book.component";

const BooksList = () => {

    const { filteredBookList } = useContext(BooksContext);

    return (
        <div className="books-list-container">
            {filteredBookList.map(book => {
                return (
                    <BookComponent book={book} />
                )
            })}
        </div>
    )
}

export default BooksList;