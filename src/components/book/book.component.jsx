import { Card, CardContent, CardMedia, Typography, CardActions, Button, Container } from "@mui/material";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import BookAlertDialogBox from "../bookAlertDialogBox/bookAlertDialogBox.component";


const BookComponent = ({ book }) => {
    const { title, id, formats, authors, download_count } = book;

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div key={id}>
            <Card variant="outlined">
                <CardContent>
                    <CardMedia
                        component="img"
                        image={formats["image/jpeg"]}
                        alt={title}
                    />
                    <Typography variant="h5" align="center" style={{ paddingTop: '10px' }}>
                        {title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary" align="center">
                        {(authors[0] || {}).name}
                    </Typography>
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
                    <BookAlertDialogBox open={open} handleClose={handleClose} formats={formats}/>
                </CardActions>
            </Card>
        </div>
    )
}

export default BookComponent;