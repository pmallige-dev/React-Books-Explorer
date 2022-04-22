import { useContext } from "react";
import { BooksContext } from "../../context/books.context";


const SearchBox = () => {

    const { onSearchChange } = useContext(BooksContext);

    const onChangeHandler = onSearchChange

    return (
        <input
            placeholder="Search Books"
            onChange={onChangeHandler}
        />
    )
}

export default SearchBox;