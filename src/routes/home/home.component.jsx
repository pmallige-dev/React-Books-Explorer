import { categories } from "../../data/categories";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Masonry } from "@mui/lab";
import CircularProgress from '@mui/material/CircularProgress';
import CategoryButton from "../../components/category-button/category-button.component";
import SearchBox from "../../components/search-box/search-box.component";
import SearchBookList from "../../components/search-book-list/searchBookList.component";
import { Fragment } from "react";
import { useContext } from "react";
import { BooksContext } from "../../context/books.context";
import ButtonComponent from "../../components/button/button.component";
import LoadingBackdrop from "../../components/loadingBackDrop/LoadingBackDrop.component";
import SearchNotFound from "../../components/searchNotFound/SearchNotFound.component";
import AllCategoriesListComponent from "../../components/allCategoriesListButton/AllCategoriesListButton.component";

const Home = () => {

    const { isSearchSubmit, homePageSearchSubmit, isLoading, isFullPageLoading, searchStringNotFound, searchBtnClose, onSearchBtnCloseClick } = useContext(BooksContext);

    const btnOnClickHandler = onSearchBtnCloseClick;

    console.log(searchStringNotFound);

    return (
        <Container>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>Books Explorer</Typography>
                <SearchBox homePageSearch={true} />
                {
                    isSearchSubmit && isFullPageLoading && <LoadingBackdrop />
                }
                {
                    isSearchSubmit && !searchBtnClose && homePageSearchSubmit && (
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
                                    <SearchBookList homePageSearch={true} />
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
                <Typography variant="h5" align="center" gutterBottom>Find the Book You Want to Read from the popular categories below</Typography>
            </Container>
            <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4 }} spacing={2}>
                {
                    categories.map((category) => (
                        <CategoryButton key={category.id} category={category} />
                    ))
                }
            </Masonry>
            <Typography variant="h5" align="center" gutterBottom>Explore our entire range of Categories</Typography>
            <AllCategoriesListComponent />
        </Container>
    )
}

export default Home;