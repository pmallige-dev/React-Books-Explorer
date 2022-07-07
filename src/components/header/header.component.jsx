import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

const Header = () => {

    const navStyles = {
        color: 'white',
        textDecoration: 'none',
        typography: 'h6',
        '&:hover': {
            color: 'grey.500'
        },
        '&.active': {
            color: 'white'
        }
    }
    
    return(
        <AppBar position="static" sx={{ mb: 4 }}>
            <Toolbar sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <Box display='flex' alignItems='center' component={NavLink} to='/' sx={navStyles}>
                    <Typography variant='h6'>Books Explorer</Typography>
                </Box>

            </Toolbar>
        </AppBar>
    )
}

export default Header;