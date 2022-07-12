import { Backdrop, CircularProgress, Typography } from "@mui/material"
import { useState } from "react"

export default function LoadingBackdrop() {

    const [open, setOpen] = useState(true)

    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={open}
        >
            <CircularProgress color="inherit" />
        </Backdrop>
    )
}