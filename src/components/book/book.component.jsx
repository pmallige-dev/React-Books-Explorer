import './book.styles.css'

const BookComponent = ({ book }) => {
    const { title, id, formats, authors, download_count } = book;

    // href={formats["image/html"]}

    // const clickHandler = newWindowLink();

    // const newWindowLink = () => {
    //     window.open(formats["image/html"]);
    // }

    return (
        <div key={id} className="book-container card">
            {/* <div className="ui fluid card"> */}
            <div className="content">
                <a className="header" href={formats["text/html"]} target="_blank" rel="noreferrer noopener">{title}</a>
                <div className="meta">{(authors[0] || {}).name}</div>
                <br />
                <div className='meta'>Views: {download_count}</div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default BookComponent;