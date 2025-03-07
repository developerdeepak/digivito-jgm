import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/home-hero-banner-lg.jpg';
import ScheduleFreeConsultationImage from '../images/schedule-free-consultation.jpg';
import ExperiencedGuideBanner from '../images/experienced-guide.jpg';
import Icons from "../images/icons";

const pageSpecificData = AppData.pages.home;
const getInTouchData = {
    ...pageSpecificData.getInTouch,
    "contact": {
        ...AppData.contact,
        ...pageSpecificData.getInTouch.contact
    }
};

const Home = () => {
    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage} />
            <Components.TwoColumnList {...pageSpecificData.practiceAreas} />
            <Components.BannerSideBySide {...pageSpecificData.scheduleFreeConsultation} BannerImage={ScheduleFreeConsultationImage} />
            <Components.ImageBanner containerSelector="quote-ceo-comp" images={{ default: Icons.CEOQuoteSm, desktop: Icons.CEOQuoteLg }} altText="CEO Quote message" />
            <Components.WhyChooseUs {...pageSpecificData.whyChooseUs} BannerImage={ExperiencedGuideBanner} />
            <Components.Testimonials {...pageSpecificData.testimonials} />
            <Components.GetInTouch {...getInTouchData} />
        </>
    );
};

export default Home;