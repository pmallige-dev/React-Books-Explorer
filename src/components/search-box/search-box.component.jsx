import { useContext } from "react";
import { BooksContext } from "../../context/books.context";
import { TextField, Container } from "@mui/material";

const SearchBox = () => {

    const { onSearchSubmit, onInputChange, searchField } = useContext(BooksContext);

    const onSubmitHandler = onSearchSubmit;
    const onChangeHandler = onInputChange;

    return (
        <Container align='center' style={{paddingBottom: '20px'}}>
            <form id="submit" onSubmit={onSubmitHandler}>
                <TextField
                    id="outlined-basic"
                    label="Search Books"
                    variant="outlined"
                    name="search"
                    margin="normal"
                    onChange={onChangeHandler}
                />
            </form>
        </Container>
    )
}

export default SearchBox;