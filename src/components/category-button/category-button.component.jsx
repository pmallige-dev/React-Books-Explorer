import { useNavigate } from "react-router-dom";
import { Fragment, useContext } from "react";
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import { BooksContext } from "../../context/books.context";

const CategoryButton = ({ category }) => {
    const { title, route, description } = category;
    const navigate = useNavigate();
    const { onCategorySelected } = useContext(BooksContext);

    const navigationHandler = () => navigate(route);
    const categoryHandler = () => onCategorySelected(title);

    return (
        <Card variant="outlined">
            <CardContent>
                <Typography variant="h5" component="div" align="center">
                    {title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={() => { navigationHandler(); categoryHandler(); }}>See Book List</Button>
            </CardActions>
        </Card>
    )
}

export default CategoryButton;