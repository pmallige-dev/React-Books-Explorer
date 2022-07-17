import { useContext } from "react";
import { BooksContext } from "../../context/books.context";
import { TextField, Container, Typography } from "@mui/material";

const SearchBox = ({ homePageSearch, genrePageSearch }) => {

    const { onSearchSubmit, onGenreSearchSubmit, onInputChange } = useContext(BooksContext);

    let onSubmitHandler;
    const onChangeHandler = onInputChange;

    if (homePageSearch) {
        onSubmitHandler = onSearchSubmit;
    } else {
        onSubmitHandler = onGenreSearchSubmit;
    }

    return (
        <Container align='center' style={{paddingBottom: '20px'}}>
            <form id="submit" onSubmit={onSubmitHandler}>
                <TextField
                    id="outlined-basic"
                    label="Search Books"
                    variant="outlined"
                    name="search"
                    onChange={onChangeHandler}
                />
                <br />
                <Typography variant="caption" gutterBottom>
                    Press ENTER to Search
                </Typography>
            </form>
        </Container>
    )
}

export default SearchBox;