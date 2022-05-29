import { useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import { BooksContext } from "../../context/books.context";

const CategoryButton = ({ category }) => {
    const { title, route, description } = category;
    const navigate = useNavigate();
    const { onCategorySelected } = useContext(BooksContext);

    const navigationHandler = () => navigate(route);
    const categoryHandler = () => onCategorySelected(title);

    return (
        <Fragment>
            <div className="card">
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="description">{description}</div>
                </div>
                <div className="ui bottom attached button" onClick={() => { navigationHandler(); categoryHandler(); }}>
                    {title}
                    <br />
                </div>

            </div>

        </Fragment>

    )
}

export default CategoryButton;