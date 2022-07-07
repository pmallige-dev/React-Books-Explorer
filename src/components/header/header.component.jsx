import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import BookImg from '../../book.png';

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
                    <Typography variant='h5' style={{fontFamily: 'Koulen'}}>Books Explorer</Typography>
                    <img src={BookImg} height={40} width={40} />
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header;