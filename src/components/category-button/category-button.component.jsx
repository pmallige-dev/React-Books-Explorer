import { useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import { BooksContext } from "../../context/books.context";

const CategoryButton = ({ category }) => {
    const { title, route } = category;
    const navigate = useNavigate();
    const { onCategorySelected } = useContext(BooksContext);

    const navigationHandler = () => navigate(route);
    const categoryHandler = () => onCategorySelected(title);

    return (
        <Fragment>
            <button onClick={() => { navigationHandler(); categoryHandler(); }}>{title}</button>
            <br />
        </Fragment>
        
    )
}

export default CategoryButton;