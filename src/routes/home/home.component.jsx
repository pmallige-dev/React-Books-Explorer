import { categories } from "../../data/categories";
import CategoryButton from "../../components/category-button/category-button.component";
import './home.styles.css';

const Home = () => {
    return (
        <div className="ui inverted vertical masthead center aligned segment homepage-container">
            <div className="ui inverted vertical masthead center aligned segment">
                <div className="ui text container">
                    <h1>Books Explorer</h1>
                    <h2>Find the Book You Want to Read</h2>
                </div>

            </div>
            <div className="ui inverted vertical masthead center aligned segment">
                <div className="category-list-container ui cards">
                    {
                        categories.map((category) => (
                            <CategoryButton key={category.id} category={category} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Home;