import { Card, Container } from "@mui/material";
import { Fragment } from "react";
import { allCategoriesList } from "../../data/allCategories";
import AllCategoryButtonGroup from "../allCategoryButtonGroup/AllCategoryButtonGroup.component";

const AllCategoriesListComponent = () => {
    const { aList } = allCategoriesList;

    return (
        <div style={{paddingBottom: '20px'}}>
            <AllCategoryButtonGroup Alphabet="A" alphabetListArray={aList} />
        </div>
    )
}

export default AllCategoriesListComponent;