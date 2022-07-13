import { Card, Container } from "@mui/material";
import { Fragment } from "react";
import { allCategoriesList } from "../../data/allCategories";
import AllCategoryButtonGroup from "../allCategoryButtonGroup/AllCategoryButtonGroup.component";

const AllCategoriesListComponent = () => {
    const {
        aList,
        bList,
    } = allCategoriesList;

    return (
        <div style={{ paddingBottom: '20px' }}>
            <AllCategoryButtonGroup Alphabet="A" alphabetListArray={aList} />
            <AllCategoryButtonGroup Alphabet="B" alphabetListArray={bList} />
        </div>
    )
}

export default AllCategoriesListComponent;