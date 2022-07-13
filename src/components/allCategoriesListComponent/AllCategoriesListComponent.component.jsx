import { Card, Container } from "@mui/material";
import { Fragment } from "react";
import { allCategoriesAlphabeticalList } from "../../data/allCategoriesAlphabetical";
import AllCategoryButtonGroup from "../allCategoryButtonGroup/AllCategoryButtonGroup.component";

const AllCategoriesListComponent = () => {
    const {
        aList,
        bList,
        cList,
        dList,
        eList,
    } = allCategoriesAlphabeticalList;

    return (
        <div style={{ paddingBottom: '20px' }}>
            <AllCategoryButtonGroup Alphabet="A" alphabetListArray={aList} />
            <AllCategoryButtonGroup Alphabet="B" alphabetListArray={bList} />
            <AllCategoryButtonGroup Alphabet="C" alphabetListArray={cList} />
            <AllCategoryButtonGroup Alphabet="D" alphabetListArray={dList} />
            <AllCategoryButtonGroup Alphabet="E" alphabetListArray={eList} />
        </div>
    )
}

export default AllCategoriesListComponent;