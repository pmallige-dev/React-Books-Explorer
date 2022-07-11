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

const Home = () => {

    const { isSearchSubmit, isLoading, searchBtnClose, onSearchBtnCloseClick } = useContext(BooksContext);

    const btnOnClickHandler = onSearchBtnCloseClick;

    return (
        <Container>
            <Container>
                <Typography variant="h3" align="center" gutterBottom>Books Explorer</Typography>
                <SearchBox homePageSearch={true} />
                {
                    isSearchSubmit ? (
                        isLoading ?
                            <Container align="center" style={{ paddingTop: '20px', paddingBottom: '20px' }}>
                                <CircularProgress />
                            </Container> :
                            (<Fragment>
                                {
                                    searchBtnClose ?
                                        <Fragment /> : (
                                            <Fragment>
                                                <ButtonComponent
                                                    btnName="Close Search Results"
                                                    onClick={btnOnClickHandler}
                                                    align="center"
                                                    style={{ paddingBottom: '20px' }}
                                                />
                                                <SearchBookList homePageSearch={true} />
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
                        <Fragment />
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
        </Container>
    )
}

export default Home;