import { useContext, Fragment } from "react";
import SearchBox from "../../components/search-box/search-box.component";
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Typography } from "@mui/material";
import { BooksContext } from "../../context/books.context";
import BooksList from "../../components/books-list/books-list.component";
import SearchBookList from "../../components/search-book-list/searchBookList.component";
import ButtonComponent from "../../components/button/button.component";
import LoadingBackdrop from "../../components/loadingBackDrop/LoadingBackDrop.component";
import SearchNotFound from "../../components/searchNotFound/SearchNotFound.component";
import { useEffect } from "react";

const Genre = () => {

    const {
        isLoading,
        isFullPageLoading,
        isSearchSubmit,
        genrePageSearchSubmit,
        categorySelected,
        searchBtnClose,
        onSearchBtnCloseClick,
        resetSearchWithCategorySelected,
        genrePageLoad,
        setGenrePageLoad,
        searchStringNotFound
    } = useContext(BooksContext);

    useEffect(() => {
        setGenrePageLoad(true);

        return () => {
            setGenrePageLoad(false);
        }
    })

    const btnOnClickHandler = () => {
        onSearchBtnCloseClick();
        resetSearchWithCategorySelected();
    }

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                {categorySelected}
            </Typography>
            <SearchBox />
            {
                isFullPageLoading && <LoadingBackdrop />
            }
            {
                isSearchSubmit && isFullPageLoading && <LoadingBackdrop />
            }
            {
                isSearchSubmit && !searchBtnClose && genrePageSearchSubmit && (
                    <Fragment>
                        <ButtonComponent
                            btnName="Close Search Results"
                            onClick={btnOnClickHandler}
                            align="center"
                            style={{ paddingBottom: '20px' }}
                        />
                        {
                            searchStringNotFound ?
                                <SearchNotFound /> :
                                <SearchBookList />
                        }
                        <ButtonComponent
                            btnName="Close Search Results"
                            onClick={btnOnClickHandler}
                            align="center"
                            style={{ paddingBottom: '20px' }}
                        />
                    </Fragment>
                )
            }
            {
                searchBtnClose && isFullPageLoading && <LoadingBackdrop />
            }
            {
                (!isSearchSubmit || (searchBtnClose && genrePageLoad)) && (
                    <Fragment>
                        <BooksList />
                        <Container align="center" style={{ paddingTop: '20px' }}>
                            {isLoading && <CircularProgress />}
                        </Container>
                    </Fragment>
                )
            }
        </Container>
    )
}

export default Genre;