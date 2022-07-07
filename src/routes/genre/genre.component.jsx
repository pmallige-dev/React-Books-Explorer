import { useContext } from "react";
import SearchBox from "../../components/search-box/search-box.component";
import BooksList from "../../components/books-list/books-list.component";
import CategoryBookList from "../../components/category-book-list/categoryBookList.component";
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Typography } from "@mui/material";
import Spinner from "../../components/spinner/spinner.component";
import Footer from "../../components/Footer/Footer.component";
import { BooksContext } from "../../context/books.context";
import SearchBookList from "../../components/search-book-list/searchBookList.component";

const Genre = () => {

    const { isLoading, isSearchSubmit, categorySelected } = useContext(BooksContext);

    return (
        <div>
            <Typography variant="h3" align="center">
                {categorySelected}
            </Typography>
            <SearchBox />
            {
                isSearchSubmit ? <SearchBookList /> : <CategoryBookList />
            }
            {/* <CategoryBookList /> */}
            <Container align="center" style={{paddingTop: '20px'}}>
                {isLoading && <CircularProgress />}
            </Container>
        </div>
    )
}

export default Genre;