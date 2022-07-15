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
        lList,
        mList,
        nList,
        oList,
        pList,
        rList,
        sList,
        tList,
        uList,
        wList,
        zList
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
            <AllCategoryButtonGroup Alphabet="M" alphabetListArray={mList} />
            <AllCategoryButtonGroup Alphabet="N" alphabetListArray={nList} />
            <AllCategoryButtonGroup Alphabet="O" alphabetListArray={oList} />
            <AllCategoryButtonGroup Alphabet="P" alphabetListArray={pList} />
            <AllCategoryButtonGroup Alphabet="R" alphabetListArray={rList} />
            <AllCategoryButtonGroup Alphabet="S" alphabetListArray={sList} />
            <AllCategoryButtonGroup Alphabet="T" alphabetListArray={tList} />
            <AllCategoryButtonGroup Alphabet="U" alphabetListArray={uList} />
            <AllCategoryButtonGroup Alphabet="W" alphabetListArray={wList} />
            <AllCategoryButtonGroup Alphabet="Z" alphabetListArray={zList} />
        </div>
    )
}

export default AllCategoriesListComponent;