import { categories } from "../../data/categories";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import { Masonry } from "@mui/lab";

import CategoryButton from "../../components/category-button/category-button.component";
import Footer from "../../components/Footer/Footer.component";

const Home = () => {
    return (
        <Container>
            <Container>
                <Typography variant="h3" align="center">Books Explorer</Typography>
                <Typography variant="h5" align="center" gutterBottom>Find the Book You Want to Read from the popular categories below</Typography>
            </Container>
            <Masonry columns={4} spacing={2}>
                {
                    categories.map((category) => (
                        // <Grid item xs={3} key={category.id}>
                            <CategoryButton key={category.id} category={category} />
                        // </Grid>                      
                    ))
                }
            </Masonry>
            <Footer />
        </Container>
    )
}

export default Home;