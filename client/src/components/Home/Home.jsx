import "./Home.scss";
import Banner from "./Banner/Banner";
import Products from "../Products/Products";
import Video from "./Video/Video";
const Home = () => {
    return <div class="home">
        <Banner />
        <div className="main-content">
            <div className="layout">
                <Products />
                <Video/>
            </div>
        </div>
    </div>;
};

export default Home;
