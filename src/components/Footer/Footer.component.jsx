import { AppBar, Toolbar, Box, Typography, Container } from "@mui/material";

const Footer = () => {
    return (
        <footer>
            {/* <AppBar position="static" sx={{ mb: 4 }}>
                <Toolbar sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Container>
                        This App is created by Prakyath Mallige
                    </Container>
                    <Box display='flex' alignItems='center' to='/'>
                    </Box>
                </Toolbar>
            </AppBar> */}
            <Box display='flex' alignItems='center' to='/' bgcolor='black'>
                <Container>
                    <Typography color='white'>
                        This App is created by Prakyath Mallige
                    </Typography>
                </Container>
            </Box>
        </footer>
    )
}

export default Footer;