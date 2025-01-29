import BannerImage from '../images/hand-shaking-business.jpg';
import AppData from '../data/data.json';
import HTMLParser from '../helpers/htmlParser';
import { Link } from 'react-router-dom';

const GetStarted = () => {
    return (
        <div class="row bg-primary get-started-section">
            <div class="col mw-1600 mx-auto">
                <div class="row align-items-center">
                    <div class="col-12 col-lg-6 order-lg-1 banner-container">
                        <img src={BannerImage} className="mw-100" alt="Ready to consult banner" />
                    </div>
                    <div class="col-12 col-lg-6 order-lg-0 d-flex align-items-center py-5 py-lg-0 text-container">
                        <div className="content">
                            <h2 className="mb-0 poppins-bold text-white heading">{HTMLParser.parseHTML(AppData.sections.getStarted.heading)}</h2>
                            <Link to={AppData.sections.getStarted.cta.link} className="btn cta btn-outline-white rounded-pill poppins-bold">
                                {HTMLParser.parseHTML(AppData.sections.getStarted.cta.text)}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetStarted;
