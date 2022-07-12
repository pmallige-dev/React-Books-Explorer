import { Container, Typography } from "@mui/material"

const SearchNotFound = () => {
    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                Uh Oh! It looks like what you are looking for doesn't exist!
            </Typography>
        </Container>
    )
}

export default SearchNotFound;