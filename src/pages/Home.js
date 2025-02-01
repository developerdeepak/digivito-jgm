import Components from "../components";
import AppData from '../data/data.json';

const pageSpecificData = AppData.sections.pageSpecific.home;

const Home = () => {
    return (
        <>
            <Components.TwoColumnListComponent {...pageSpecificData.practiceAreas} />
        </>
    );
};

export default Home;