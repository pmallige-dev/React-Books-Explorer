import { Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Typography, Container } from "@mui/material";
import { useState } from "react";

const Footer = () => {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <footer style={{ backgroundColor: '#f0eded' }}>
            <Box display='flex' alignItems='center' to='/' bgcolor='#f0eded'>
                <Container>
                    <div style={{ paddingTop: '20px' }}>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            Icons and Images Attributions
                        </Button>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"List of Attributions for the Images and Icons used in this App"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    <a
                                        href="https://www.flaticon.com/free-icons/greek" title="greek icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Greek icons created by Smashicons - Flaticon
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.flaticon.com/free-icons/investigation"
                                        title="investigation icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Investigation icons created by Nhor Phai - Flaticon
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.flaticon.com/free-icons/children" title="children icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Children icons created by Freepik - Flaticon
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.flaticon.com/free-icons/teacher" title="teacher icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Teacher icons created by geotatah - Flaticon
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.flaticon.com/free-icons/history" title="history icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        History icons created by Eucalyp - Flaticon
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.flaticon.com/free-icons/hindu" title="hindu icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Hindu icons created by Freepik - Flaticon
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.flaticon.com/free-icons/chemistry" title="chemistry icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Chemistry icons created by iconixar - Flaticon
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.flaticon.com/free-icons/cpu" title="cpu icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Cpu icons created by Freepik - Flaticon
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.flaticon.com/free-icons/book" title="book icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Book icons created by Smashicons - Flaticon
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.flaticon.com/free-icons/geography"
                                        title="Geography icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Geography icons created by Freepik - Flaticon
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.flaticon.com/free-icons/law" title="law icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Law icons created by Freepik - Flaticon
                                    </a>
                                    <br />
                                    <a
                                        href="https://www.flaticon.com/free-icons/music" title="book icons"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        Music icons created by Freepik - Flaticon
                                    </a>
                                    <br />
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} autoFocus>
                                    Ok
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </div>
                    <div>
                        <Typography style={{ paddingTop: '10px' }} gutterBottom>
                            The data related to books are obtained from <a href="https://gutendex.com/" title="Gutendex" target="_blank" rel="noreferrer noopener">Gutendex API</a>. Gutendex is a third party API which provides the Open Source and Free Books related data from Project Gutenberg.
                        </Typography>
                        <Typography style={{ paddingTop: '10px' }} gutterBottom>
                            <a href="https://www.gutenberg.org/" title="Gutenberg" target="_blank" rel="noreferrer noopener">Project Gutenberg</a> is an online library of free eBooks.
                        </Typography>
                        <Typography gutterBottom>
                            Project Gutenberg was the first provider of free electronic books, or eBooks. Michael Hart, founder of Project Gutenberg, invented eBooks in 1971 and his memory continues to inspire the creation of eBooks and related content today.
                        </Typography>
                        <Typography style={{ paddingTop: '10px' }} gutterBottom>
                            This App is not intended for commercial purposes. This app is created purely for educational and non-commercial purposes.
                        </Typography>
                        <Typography gutterBottom>
                            This App is created by <strong>Prakyath Mallige</strong>.
                        </Typography>
                        <a
                            href="https://www.linkedin.com/in/prakyathm/"
                            title="Prakyath's LinkedIn"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="https://img.icons8.com/office/35/000000/linkedin.png" />
                        </a>
                        <a
                            href="https://github.com/pmallige-dev"
                            title="Prakyath's GitHub"
                            target="_blank"
                            rel="noreferrer noopener"
                        >
                            <img src="https://img.icons8.com/ios-filled/35/000000/github.png" />
                        </a>
                    </div>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;