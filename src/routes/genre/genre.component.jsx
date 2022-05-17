import { useContext } from "react";
import SearchBox from "../../components/search-box/search-box.component";
import BooksList from "../../components/books-list/books-list.component";
import { BooksContext } from "../../context/books.context";

const Genre = () => {

    const { isLoading } = useContext(BooksContext)

    return (
        <div className="genre-container">
            <SearchBox />
            <BooksList />
            {isLoading && (
                <div className="loading-new-books">
                    Loading New Books ...
                </div>
            )}
        </div>
    )
}

export default Genre;