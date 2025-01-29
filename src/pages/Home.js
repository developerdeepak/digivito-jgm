import Components from "../components";
import AppData from '../data/data.json';

const Home = () => {
    return (
        <>
            <Components.TwoColumnListComponent {...AppData.sections.pageSpecific.home.practiceAreas} />
        </>
    );
};

export default Home;