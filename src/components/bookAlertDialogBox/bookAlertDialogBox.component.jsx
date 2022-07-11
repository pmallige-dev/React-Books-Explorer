import { Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText, Button, Container } from "@mui/material";
import { Fragment } from "react";

const BookAlertDialogBox = ({ open, handleClose, formats }) => {
    return (
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                {"List of Available Formats"}
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    {
                        formats["text/html"] ?
                            <Button
                                component="a"
                                href={formats["text/html"]}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                HTML
                            </Button> :
                            <Fragment />
                    }
                    {
                        formats["text/plain; charset=utf-8"] ?
                            <Button
                                component="a"
                                href={formats["text/plain; charset=utf-8"]}
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                TXT
                            </Button> :
                            <Fragment />
                    }
                    {
                        formats["application/x-mobipocket-ebook"] ?
                            <Button
                                component="a"
                                href={formats["application/x-mobipocket-ebook"]}
                            >
                                KINDLE
                            </Button> :
                            <Fragment />
                    }
                    {
                        formats["application/epub+zip"] ?
                            <Button
                                component="a"
                                href={formats["application/epub+zip"]}
                            >
                                EPUB
                            </Button> :
                            <Fragment />
                    }
                    {
                        formats["application/zip"] ?
                            <Button
                                component="a"
                                href={formats["application/zip"]}
                            >
                                ZIP
                            </Button> :
                            <Fragment />
                    }
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} autoFocus>
                    Ok
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default BookAlertDialogBox;