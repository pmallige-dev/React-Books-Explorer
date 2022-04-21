import SearchBox from "../search-box/search-box.component";
import BooksList from "../books-list/books-list.component";

const Genre = () => {
    return (
        <div className="genre-container">
            <SearchBox />
            <BooksList />
        </div>
    )
}

export default Genre;