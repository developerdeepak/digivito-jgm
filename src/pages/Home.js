import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/home-hero-banner-lg.jpg';

const pageSpecificData = AppData.sections.pageSpecific.home;

const Home = () => {
    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage} />
            <Components.TwoColumnListComponent {...pageSpecificData.practiceAreas} />
        </>
    );
};

export default Home;