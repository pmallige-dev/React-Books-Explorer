import { AppBar, Toolbar, Box, Typography, Container } from "@mui/material";

const Footer = () => {
    return (
        <footer>
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