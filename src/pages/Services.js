import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/services-hero-banner-lg.jpg';

const pageSpecificData = AppData.pages.services;

const Services = () => {

    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage} />
            <Components.HeadingAndParagraph {...pageSpecificData.ourServices} />
            <Components.TwoColumnTiles {...pageSpecificData.estatePlanning} />
            <Components.TwoColumnTiles {...pageSpecificData.businessSupport} />
        </>
    );
}

export default Services;