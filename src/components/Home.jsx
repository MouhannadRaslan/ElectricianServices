import HomeBanner from "./HomeBanner";
import HomeSection from "./HomeSection";
import HomeBoxes from "./HomeBoxes";
import HomeService from "./HomeService";
import HomeTestimonials from "./HomeTestimonials";
import OurContact from "./OurContact";
import Footer from "./Footer";


function Home(){
    return(
        <>
            <HomeBanner/>
            <HomeSection/>
            <HomeBoxes/>
            <HomeService/>
            <HomeTestimonials/>
            <OurContact/>
            <Footer/>
        </>
    );
}

export default Home;