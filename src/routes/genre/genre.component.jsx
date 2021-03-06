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
import LoadingSkeleton from "../../components/loadingSkeleton/LoadingSkeleton.component";

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

        window.onpopstate = e => {
            window.location.reload()
        }

        window.onpushstate = e => {
            window.location.reload()
        }

        return () => {
            setGenrePageLoad(false);
        }
    }, []);

    // (function () {
    //     window.onpageshow = function (event) {
    //         if (event.persisted) {
    //             window.location.reload()
    //         }
    //     };
    // })();

    // const btnOnClickHandler = () => {
    //     onSearchBtnCloseClick();
    //     resetSearchWithCategorySelected();
    // }

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                {
                    categorySelected.replace('%20', ' ')
                }
            </Typography>
            <SearchBox genrePageSearch={true} />
            {
                isFullPageLoading && <LoadingBackdrop />
            }
            {
                isFullPageLoading && <LoadingSkeleton />
            }
            {
                isSearchSubmit && isFullPageLoading && <LoadingBackdrop />
            }
            {
                isSearchSubmit && isFullPageLoading && <LoadingSkeleton />
            }
            {/* {
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
            } */}
            {
                searchBtnClose && isFullPageLoading && <LoadingBackdrop />
            }
            {
                searchBtnClose && isFullPageLoading && <LoadingSkeleton />
            }
            {
                (!isSearchSubmit || (searchBtnClose && genrePageLoad)) && (
                    <Fragment>
                        <BooksList />
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