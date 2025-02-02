import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/services-hero-banner-lg.jpg';

const pageSpecificData = AppData.sections.pageSpecific.services;

const Services = () => {

    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage} />
        </>
    );
}

export default Services;