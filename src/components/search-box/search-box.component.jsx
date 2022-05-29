import { useContext } from "react";
import { BooksContext } from "../../context/books.context";
import './search-box.styles.css'


const SearchBox = () => {

    const { onSearchSubmit, onInputChange, searchField } = useContext(BooksContext);

    const onSubmitHandler = onSearchSubmit;
    const onChangeHandler = onInputChange;

    return (
        <div className="SearchBox-container" onSubmit={onSubmitHandler}>
            <form id="submit">
                <div className="ui icon input">
                    <input value={searchField} onChange={onChangeHandler} placeholder="Search Books" />
                </div>
                <button className="ui button search" type="submit">
                    Search
                </button>
            </form>
        </div>

    )
}

export default SearchBox;