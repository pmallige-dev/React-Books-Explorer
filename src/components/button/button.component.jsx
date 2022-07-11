import { Button, Container } from "@mui/material";

const ButtonComponent = ({ btnName, onClick, align, style }) => {
    return (
        <Container align={align} style={style}>
            <Button variant="contained" onClick={onClick}>
                {btnName}
            </Button>
        </Container>
    )
}

export default ButtonComponent;