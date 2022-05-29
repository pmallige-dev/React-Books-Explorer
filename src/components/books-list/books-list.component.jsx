import { useContext } from "react";
import { BooksContext } from "../../context/books.context";
import BookComponent from "../book/book.component";
import './books-list.styles.css'

const BooksList = () => {

    const { filteredBookList } = useContext(BooksContext);

    return (
        <div className="books-list-container ui cards">
            {filteredBookList.map(book => {
                return (
                    <BookComponent key={book.id} book={book} />
                )
            })}
        </div>
    )
}

export default BooksList;