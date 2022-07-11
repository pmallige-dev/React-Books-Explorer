import { useContext, useEffect } from "react";
import BooksList from "../books-list/books-list.component";
import { BooksContext } from "../../context/books.context";

const CategoryBookList = () => {

    const { handleScroll } = useContext(BooksContext);

    const windowScrollhandler = handleScroll;

    useEffect(() => {
        // TODO - Check/fix the infinite scroll function where the 3rd page is not loaded upon infinite scroll       
        window.addEventListener("scroll", windowScrollhandler);

        return () => {
            window.removeEventListener("scroll", windowScrollhandler);
        }
    }, []);

    return (
        <div>
            <BooksList />
        </div>
    )
}

export default CategoryBookList;