import './book.styles.css'

const BookComponent = ({ book }) => {
    const { title, id, formats, authors, download_count } = book;

    return (
        <div key={id} className="book-container column">
            <div className="ui fluid card">
                <div className="content">
                    <a className="header">{title}</a>
                    <div className="meta">{(authors[0] || {}).name}</div>
                    <br />
                    <div className='meta'>Downloads: {download_count}</div>
                </div>
            </div>
        </div>
    )
}

export default BookComponent;