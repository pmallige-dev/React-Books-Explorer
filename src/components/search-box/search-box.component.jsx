import { useContext } from "react";
import { BooksContext } from "../../context/books.context";


const SearchBox = () => {

    const { onSearchSubmit, onInputChange, searchField } = useContext(BooksContext);

    const onSubmitHandler = onSearchSubmit;
    const onChangeHandler = onInputChange;

    return (
        <div className="SearchBox-container" onSubmit={onSubmitHandler}>
            <form id="submit">
                <input value={searchField} onChange={onChangeHandler} placeholder="Search Books" />
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}

export default SearchBox;