import ButtonComponent from "../../components/button/button.component";
import SearchNotFound from "../../components/searchNotFound/SearchNotFound.component";
import SearchBookList from "../../components/search-book-list/searchBookList.component";
import SearchBox from "../../components/search-box/search-box.component";
import LoadingBackdrop from "../../components/loadingBackDrop/LoadingBackDrop.component";
import LoadingSkeleton from "../../components/loadingSkeleton/LoadingSkeleton.component";
import { Fragment, useContext } from "react";
import { BooksContext } from "../../context/books.context";
import { Typography } from "@mui/material";

const SearchGenreBooks = () => {

    const {
        isLoading,
        isFullPageLoading,
        isSearchSubmit,
        genrePageSearchSubmit,
        categorySelected,
        searchBtnClose,
        onSearchBtnCloseClick,
        onGenreSearchBtnCloseClick,
        resetSearchWithCategorySelected,
        searchField,
        searchStringNotFound,
        booksNotFound
    } = useContext(BooksContext);

    const btnOnClickHandler = () => {
        onGenreSearchBtnCloseClick();
        resetSearchWithCategorySelected();
    }

    return (
        <Fragment>
            <Typography variant="h4" align="center" gutterBottom>
                Search Results for '{searchField}' in {categorySelected.replace('%20', ' ')}
            </Typography>
            <SearchBox />
            {
                isFullPageLoading && <LoadingBackdrop />
            }
            {
                isFullPageLoading && <LoadingSkeleton />
            }
            {/* {
                isSearchSubmit && isFullPageLoading && <LoadingBackdrop />
            }
            {
                isSearchSubmit && isFullPageLoading && <LoadingSkeleton />
            } */}
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

        </Fragment>
    )
}

export default SearchGenreBooks;