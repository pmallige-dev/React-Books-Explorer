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
import { useEffect, useState } from "react";
import NextBooksNotFoundComponent from "../../components/nextBooksNotFoundComponent/NextBooksNotFoundComponent.component";

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
        searchStringNotFound,
        booksNotFound
    } = useContext(BooksContext);

    const [genrePageLoad, setGenrePageLoad] = useState(false);

    useEffect(() => {
        setGenrePageLoad(true);

        return () => {
            setGenrePageLoad(false);
        }
    }, []);

    const btnOnClickHandler = () => {
        onSearchBtnCloseClick();
        resetSearchWithCategorySelected();
    }

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                {
                    categorySelected.replace('%20', ' ')
                }
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
                        {
                            isLoading ? 
                            <BooksList infiniteScrollEnable={false}/> :
                            <BooksList infiniteScrollEnable={true}/>
                        }                       
                        <Container align="center" style={{ paddingTop: '20px' }}>
                            {isLoading && <CircularProgress />}
                        </Container>
                        {
                            booksNotFound && <NextBooksNotFoundComponent />
                        }
                    </Fragment>
                )
            }
        </Container>
    )
}

export default Genre;