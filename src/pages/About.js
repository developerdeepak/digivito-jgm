import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/about-hero-banner-lg.jpg';

const pageSpecificData = AppData.sections.pageSpecific.services;

const About = () => {
    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage} />
            <Components.GetStarted />
        </>
    );
};

export default About;