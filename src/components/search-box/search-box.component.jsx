

const SearchBox = ({ onChangeHandler }) => {
    return (
        <input
            placeholder="Search Books"
            onChange={onChangeHandler}
        />
    )
}

export default SearchBox;