import AppData from '../data/data.json';
import Components from '../components';

const pageSpecificData = AppData.pages.privacy;

const Privacy = () => {
    return (
        <>
            <Components.HTMLContent {...pageSpecificData} />
        </>
    );
};

export default Privacy;