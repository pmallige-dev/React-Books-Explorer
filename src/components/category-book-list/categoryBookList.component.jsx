import { useContext, useEffect } from "react";
import BooksList from "../books-list/books-list.component";
import { BooksContext } from "../../context/books.context";

const CategoryBookList = () => {

    const { handleScroll } = useContext(BooksContext);

    const windowScrollhandler = handleScroll;

    useEffect(() => {
        // TODO - Fix the submit search infinite scroll issue       
        window.addEventListener("scroll", windowScrollhandler);

        // return () => {
        //     window.removeEventListener("scroll", windowScrollhandler);
        // }
    }, []);

    return (
        <div>
            <BooksList />
        </div>
    )
}

export default CategoryBookList;