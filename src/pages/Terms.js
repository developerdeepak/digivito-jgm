import AppData from '../data/data.json';
import Components from '../components';

const pageSpecificData = AppData.pages.terms;

const Terms = () => {
    return (
        <>
            <Components.HTMLContent {...pageSpecificData} />
        </>
    );
};

export default Terms;