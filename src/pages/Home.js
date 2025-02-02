import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/home-hero-banner-lg.jpg';
import ScheduleFreeConsultationImage from '../images/schedule-free-consultation.jpg';

const pageSpecificData = AppData.pages.home;

const Home = () => {
    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage} />
            <Components.TwoColumnList {...pageSpecificData.practiceAreas} />
            <Components.BannerSideBySide {...pageSpecificData.scheduleFreeConsultation} BannerImage={ScheduleFreeConsultationImage} />
        </>
    );
};

export default Home;