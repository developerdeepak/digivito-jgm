import BannerImage from '../images/hand-shaking-business.jpg';
import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImageLg from '../images/about-hero-banner-lg.jpg';
import HeroBannerImage from '../images/about-hero-banner-sm.jpg';

const pageSpecificData = AppData.pages.about;

const About = () => {
    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage} HeroImageSm={HeroBannerImageLg} />
            <Components.AboutCEO {...pageSpecificData.aboutCeo} />
            <Components.BannerSideBySide {...pageSpecificData.getStarted} BannerImage={BannerImage} />
        </>
    );
};

export default About;