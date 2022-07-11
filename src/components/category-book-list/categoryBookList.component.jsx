import { useContext, useEffect } from "react";
import BooksList from "../books-list/books-list.component";
import { BooksContext } from "../../context/books.context";

const CategoryBookList = () => {

    const { handleScroll, page } = useContext(BooksContext);

    const windowScrollhandler = handleScroll;

    useEffect(() => {
        // TODO - Fix the submit search infinite scroll issue       
        window.addEventListener("scroll", windowScrollhandler);
        console.log(`The Category book list component MOUNT useEffect is called and scroll handler event is ADDED and the page is ${page}`)

        return () => {
            window.removeEventListener("scroll", windowScrollhandler);
            console.log(`The Category book list component UNMOUNT useEffect is called and scroll handler event is REMOVED  and the page is ${page}`);
        }
    }, []);

    return (
        <div>
            <BooksList />
        </div>
    )
}

export default CategoryBookList;