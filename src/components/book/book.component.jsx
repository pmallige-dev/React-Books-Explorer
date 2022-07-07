import { Card, CardContent, CardMedia, Typography, CardActions, Button } from "@mui/material";

const BookComponent = ({ book }) => {
    const { title, id, formats, authors, download_count } = book;

    // href={formats["image/html"]}

    // const clickHandler = newWindowLink();

    // const newWindowLink = () => {
    //     window.open(formats["image/html"]);
    // }


    return (
        <div key={id}>
            <Card variant="outlined">
                <CardContent>
                    <CardMedia
                        component="img"
                        image={formats["image/jpeg"]}
                        alt={title}
                    />
                    <Typography variant="h5" align="center" style={{paddingTop: '10px'}}>
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
                    <Button
                        size="small"
                        component="a"
                        href={formats["text/html"]}
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Read Book
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default BookComponent;