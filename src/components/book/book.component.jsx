
const BookComponent = ({ book }) => {
    const { title } = book;
    return(
        <div className="book-container">
            <li>{title}</li>
        </div>
    )
}

export default BookComponent;