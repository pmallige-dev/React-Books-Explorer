import SearchBox from "../search-box/search-box.component";
import BooksList from "../books-list/books-list.component";

const Genre = ({ onChangeHandler, bookList }) => {
    return (
        <div className="genre-container">
            <SearchBox onChangeHandler={onChangeHandler}/>
            <BooksList bookList={bookList}/>
        </div>
    )
}

export default Genre;