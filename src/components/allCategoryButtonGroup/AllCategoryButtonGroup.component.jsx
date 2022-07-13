import { Card, CardContent, Container, Typography, Stack, Grid } from "@mui/material";
import { Fragment } from "react";
import AllCategoryButtons from "../allCategoryButtons/AllCategoryButtons.component";
import Masonry from "@mui/lab/Masonry";

const AllCategoryButtonGroup = ({ Alphabet, alphabetListArray }) => {
    return (
        <Fragment>
            <Typography
                variant="h5"
                align="center"
                style={{ 
                    paddingBottom: '10px',
                    paddingTop: '20px'
                }}
                gutterBottom
            >
                {Alphabet}
            </Typography>
            <Grid container spacing={2}>
                {
                    alphabetListArray.map(({ title, route }) => (
                        <AllCategoryButtons key={title} title={title} route={route} />
                    ))
                }
            </Grid>
        </Fragment>
    )
}

export default AllCategoryButtonGroup;