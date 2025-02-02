import BannerImage from '../images/hand-shaking-business.jpg';
import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/about-hero-banner-lg.jpg';

const pageSpecificData = AppData.pages.about;

const About = () => {
    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage} />
            <Components.BannerSideBySide {...pageSpecificData.getStarted} BannerImage={BannerImage} />
        </>
    );
};

export default About;