import { categories } from "../../data/categories";
import CategoryButton from "../../components/category-button/category-button.component";
import Footer from "../../components/Footer/Footer.component";
import './home.styles.css';

const Home = () => {
    return (
        <div className="homepage-container">
            <div className="ui text container">
                <h1>Books Explorer</h1>
                <h3>Find the Book You Want to Read</h3>
            </div>
            <div className="category-list-container ui cards">
                {
                    categories.map((category) => (
                        <CategoryButton key={category.id} category={category} />
                    ))
                }
            </div>
            <Footer />
        </div>
    )
}

export default Home;