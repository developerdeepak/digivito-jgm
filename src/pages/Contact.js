import Components from "../components";
import AppData from '../data/data.json';

const Contact = () => {
    return (
        <>
            <Components.TwoColumnListComponent {...AppData.sections.pageSpecific.contact.reachOut} />
            <Components.GetStarted />
        </>
    );
};

export default Contact;