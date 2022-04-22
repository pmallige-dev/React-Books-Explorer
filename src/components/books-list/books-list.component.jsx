import BookComponent from "../book/book.component";

const BooksList = ({ bookList }) => {
    return (
        <div className="books-list-container">
            {bookList.map(book => {
                return (
                    <BookComponent book={book} />
                )
            })}
        </div>
    )
}

export default BooksList;