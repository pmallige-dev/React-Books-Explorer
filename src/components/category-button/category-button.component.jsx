
const CategoryButton = ({category}) => {
    const { title } = category;

    return(
        <div className="category-button-container">
            <button>{title}</button>
        </div>
    )
}

export default CategoryButton;