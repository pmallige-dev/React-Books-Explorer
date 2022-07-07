import { categories } from "../../data/categories";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import CategoryButton from "../../components/category-button/category-button.component";
import Footer from "../../components/Footer/Footer.component";
import './home.styles.css';

const Home = () => {
    return (
        <Container>
            <Container>
                <Typography variant="h3" align="center">Books Explorer</Typography>
                <Typography variant="h5" align="center" gutterBottom>Find the Book You Want to Read from the popular categories below</Typography>
            </Container>
            <Grid container spacing={4}>
                {
                    categories.map((category) => (
                        <Grid item xs={3} key={category.id}>
                            <CategoryButton key={category.id} category={category} />
                        </Grid>                      
                    ))
                }
            </Grid>
            <Footer />
        </Container>
    )
}

export default Home;