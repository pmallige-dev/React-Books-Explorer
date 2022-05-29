import { categories } from "../../data/categories";
import CategoryButton from "../../components/category-button/category-button.component";
import './home.styles.css';

const Home = () => {
    return (
        <div className="homepage-container">
            <h2>Books Explorer</h2>
            <div className="category-list-container ui cards">
                {
                    categories.map((category) => (
                        <CategoryButton key={category.id} category={category} />
                    ))
                }
            </div>
        </div>
    )
}

export default Home;