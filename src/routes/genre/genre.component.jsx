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
import EmptyLinesComponent from "../../components/emptyLinesComponent/EmptyLinesComponent.component";

const Genre = () => {

    const {
        isLoading,
        setPage,
        isFullPageLoading,
        isSearchSubmit,
        genrePageSearchSubmit,
        categorySelected,
        searchBtnClose,
        onSearchBtnCloseClick,
        resetSearchWithCategorySelected,
        searchStringNotFound
    } = useContext(BooksContext);

    const [genrePageLoad, setGenrePageLoad] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        // setPage(1);
        setGenrePageLoad(true);
        console.log('Genre Page MOUNT');


        return () => {
            setGenrePageLoad(false);
            console.log('Genre Page UNMOUNT');
        }
    }, []);

    const btnOnClickHandler = () => {
        onSearchBtnCloseClick();
        resetSearchWithCategorySelected();
    }

    // category.replace(' ', '%20')

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
                isFullPageLoading && <EmptyLinesComponent />
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
                        <BooksList infiniteScrollEnable={true}/>
                        <Container align="center" style={{ paddingTop: '20px' }}>
                            {isLoading && <CircularProgress />}
                        </Container>
                        <Container align="center" style={{ paddingTop: '20px' }}>
                            {isLoading && <EmptyLinesComponent />}
                        </Container>
                    </Fragment>
                )
            }
        </Container>
    )
}

export default Genre;