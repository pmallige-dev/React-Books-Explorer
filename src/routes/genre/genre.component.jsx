import { useContext } from "react";
import SearchBox from "../../components/search-box/search-box.component";
import BooksList from "../../components/books-list/books-list.component";
import Spinner from "../../components/spinner/spinner.component";
import { BooksContext } from "../../context/books.context";

const Genre = () => {

    const { isLoading } = useContext(BooksContext)

    return (
        <div className="genre-container ui inverted vertical masthead center aligned segment">
            <SearchBox />
            <BooksList />
            {isLoading && <Spinner />}
        </div>
    )
}

export default Genre;