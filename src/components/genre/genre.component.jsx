import { useState, useCallback, useEffect, useRef, useContext } from "react";
import SearchBox from "../search-box/search-box.component";
import BooksList from "../books-list/books-list.component";
import { BooksContext } from "../../context/books.context";

const Genre = () => {
    return (
        <div className="genre-container">
            <SearchBox />
            <BooksList />
            <div />
        </div>
    )
}

export default Genre;