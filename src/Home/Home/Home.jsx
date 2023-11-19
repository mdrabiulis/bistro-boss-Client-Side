import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import OurMenu from "../OurMenu/OurMenu";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <OurMenu></OurMenu>
            <Featured></Featured>
        </div>
    );
};

export default Home;