
const BookComponent = ({ book }) => {
    const { title, id } = book;

    return (
        <div className="book-container">
            <li key={id}>{title}</li>
        </div>
    )
}

export default BookComponent;