import { Card, Container } from "@mui/material";
import { Fragment } from "react";
import { allCategoriesAlphabeticalList } from "../../data/allCategoriesAlphabetical";
import AllCategoryButtonGroup from "../allCategoryButtonGroup/AllCategoryButtonGroup.component";

const AllCategoriesListComponent = () => {
    const {
        aList,
        bList,
    } = allCategoriesAlphabeticalList;

    return (
        <div style={{ paddingBottom: '20px' }}>
            <AllCategoryButtonGroup Alphabet="A" alphabetListArray={aList} />
            <AllCategoryButtonGroup Alphabet="B" alphabetListArray={bList} />
        </div>
    )
}

export default AllCategoriesListComponent;