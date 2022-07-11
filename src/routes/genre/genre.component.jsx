import { useContext, Fragment } from "react";
import SearchBox from "../../components/search-box/search-box.component";
import CircularProgress from '@mui/material/CircularProgress';
import { Container, Typography } from "@mui/material";
import { BooksContext } from "../../context/books.context";
import BooksList from "../../components/books-list/books-list.component";
import SearchBookList from "../../components/search-book-list/searchBookList.component";
import ButtonComponent from "../../components/button/button.component";
import CategoryBookList from "../../components/category-book-list/categoryBookList.component"

const Genre = () => {

    const { isLoading, isSearchSubmit, categorySelected, searchBtnClose, onSearchBtnCloseClick, resetSearchWithCategorySelected } = useContext(BooksContext);

    const btnOnClickHandler = () => {
        onSearchBtnCloseClick();
        resetSearchWithCategorySelected();
    }

    return (
        <div>
            <Typography variant="h3" align="center" gutterBottom>
                {categorySelected}
            </Typography>
            <SearchBox />
            {/* {
                isSearchSubmit ? <SearchBookList /> : <CategoryBookList />
            } */}
            {
                isSearchSubmit ? (
                    isLoading ?
                        <Container align="center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                            <CircularProgress />
                        </Container> :
                        (<Fragment>
                            {
                                searchBtnClose ?
                                    (<Fragment />) :
                                    (
                                        <Fragment>
                                            <ButtonComponent
                                                btnName="Close Search Results"
                                                onClick={btnOnClickHandler}
                                                align="center"
                                                style={{ paddingBottom: '20px' }}
                                            />
                                            <SearchBookList />
                                            <ButtonComponent
                                                btnName="Close Search Results"
                                                onClick={btnOnClickHandler}
                                                align="center"
                                                style={{ paddingBottom: '20px' }}
                                            />
                                        </Fragment>
                                    )
                            }
                        </Fragment>)
                ) :
                    <Fragment>
                        <BooksList />
                        <Container align="center" style={{ paddingTop: '20px' }}>
                            {isLoading && <CircularProgress />}
                        </Container>
                    </Fragment>
                // <Fragment />
            }

        </div>
    )
}

export default Genre;