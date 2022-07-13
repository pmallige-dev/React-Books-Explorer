import { Fragment } from "react"
import { useNavigate } from "react-router";
import { Container, Grid, Typography, Paper, Button, Link } from "@mui/material";
import { styled } from '@mui/material/styles';
import { useContext } from "react";
import { BooksContext } from "../../context/books.context";

const AllCategoryButtons = ({ title, route }) => {

    const navigate = useNavigate();
    const { onCategorySelected } = useContext(BooksContext);

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
    }));

    const onClickHandler = () => {
        navigate(route);
        onCategorySelected(title);
    }

    return (
        <Fragment>
            <Grid item>
                <Item onClick={onClickHandler}>
                    <Typography
                        component={Link}
                        underline="none"
                        style={{ 
                            cursor: 'pointer',
                            color: 'black' 
                        }}
                    >
                        {title}
                    </Typography>
                </Item>
            </Grid>
        </Fragment>
    )
}

export default AllCategoryButtons;