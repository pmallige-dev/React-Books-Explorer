import { allCategories } from "../../data/allCategories";
import { Autocomplete, Container, FormControl, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { BooksContext } from "../../context/books.context";

const CategorySearchAndAutoComplete = () => {
    const [category, setCategory] = useState(null);
    const navigate = useNavigate();
    const { onCategorySelected } = useContext(BooksContext);

    const defaultProps = {
        options: allCategories,
        getOptionLabel: (option) => option.title,
    };

    const onChangeHandler = (event, newCategory) => {
        if (newCategory !== null) {
            navigate(newCategory.route);
            onCategorySelected(newCategory.title);
        }
    }

    return (
        <Container align="center">
            <Autocomplete
                {...defaultProps}
                id="combo-box-demo"
                sx={{ width: 300 }}
                value={category}
                onChange={onChangeHandler}
                renderInput={
                    (params) =>
                        <Container align="center">
                            <TextField
                                {...params}
                                label="Search Categories"
                            />
                        </Container>
                }
            />
        </Container>
    )
}

export default CategorySearchAndAutoComplete;