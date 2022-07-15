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
        fList,
        gList,
        hList,
        iList,
        jList,
        lList
    } = allCategoriesAlphabeticalList;

    return (
        <div style={{ paddingBottom: '20px' }}>
            <AllCategoryButtonGroup Alphabet="A" alphabetListArray={aList} />
            <AllCategoryButtonGroup Alphabet="B" alphabetListArray={bList} />
            <AllCategoryButtonGroup Alphabet="C" alphabetListArray={cList} />
            <AllCategoryButtonGroup Alphabet="D" alphabetListArray={dList} />
            <AllCategoryButtonGroup Alphabet="E" alphabetListArray={eList} />
            <AllCategoryButtonGroup Alphabet="F" alphabetListArray={fList} />
            <AllCategoryButtonGroup Alphabet="G" alphabetListArray={gList} />
            <AllCategoryButtonGroup Alphabet="H" alphabetListArray={hList} />
            <AllCategoryButtonGroup Alphabet="I" alphabetListArray={iList} />
            <AllCategoryButtonGroup Alphabet="J" alphabetListArray={jList} />
            <AllCategoryButtonGroup Alphabet="L" alphabetListArray={lList} />
        </div>
    )
}

export default AllCategoriesListComponent;