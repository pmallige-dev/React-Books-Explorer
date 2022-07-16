import { Card, CardContent, CardMedia, Typography, CardActions, Button, Container, Chip, ListItem, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Fragment, useState } from "react";
import BookAlertDialogBox from "../bookAlertDialogBox/bookAlertDialogBox.component";
import { useContext } from "react";
import { BooksContext } from "../../context/books.context";


const BookComponent = ({ book }) => {
    const { title, id, formats, authors, download_count, bookshelves } = book;
    const { onCategorySelect } = useContext(BooksContext);
    const navigate = useNavigate();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // const chipClickHandler = () => {
    //     navigate(`genre/${item}`);
    //     onCategorySelect(item);
    // }


    return (
        <div key={id}>
            <Card variant="outlined">
                <CardContent>
                    {
                        formats["image/jpeg"] ?
                            <CardMedia
                                component="img"
                                image={formats["image/jpeg"]}
                                alt={title}
                            /> :
                            <CardMedia
                                component="img"
                                image="https://cdn-icons-png.flaticon.com/512/2232/2232688.png"
                                alt={title}
                            />
                    }
                    <Typography variant="h5" align="center" style={{ paddingTop: '10px' }}>
                        {title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                        {(authors[0] || {}).name}
                    </Typography>
                    {
                        authors[1] &&
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                            {(authors[1] || {}).name}
                        </Typography>
                    }
                    {
                        authors[2] &&
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                            {(authors[2] || {}).name}
                        </Typography>
                    }
                    {
                        authors[3] &&
                        <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                            {(authors[3] || {}).name}
                        </Typography>
                    }
                    {/* {
                        bookshelves && (
                            <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                                Categories
                            </Typography>
                        )
                    } */}
                    <Grid container spacing={1} style={{paddingBottom: '10px'}}>
                        {
                            bookshelves.map((item) => (
                                <Grid item spacing={1} align="center">
                                    <Chip label={item} variant="outlined" />
                                </Grid>
                            ))
                        }
                    </Grid>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" align="center" gutterBottom>
                        Views: {download_count}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Container align="center">
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Available Formats
                        </Button>
                    </Container>
                    <BookAlertDialogBox open={open} handleClose={handleClose} formats={formats} />
                </CardActions>
            </Card>
        </div>
    )
}

export default BookComponent;