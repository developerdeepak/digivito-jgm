import HTMLParser from '../helpers/htmlParser';
import { Link } from 'react-router-dom';

const BannerSubHeading = (props) => {
    return (
        <p className="mb-0 poppins-bold text-white sub-heading">
            {HTMLParser.parseHTML(props.subheading)}
        </p>
    );
};

const BannerHeading = (props) => {
    return (
        <h2 className="mb-0 poppins-bold text-white h2">
            {HTMLParser.parseHTML(props.heading)}
        </h2>
    );
};

const BannerDescription = (props) => {
    return (
        <p className="mb-0 text-white banner-desc">
            {HTMLParser.parseHTML(props.description)}
        </p>
    );
};

const BannerDisclaimer = (props) => {
    return (
        <p className="mb-0 text-white banner-disclaimer">
            {HTMLParser.parseHTML(props.disclaimer)}
        </p>
    );
};

const BannerCTA = (props) => {
    return (
        <Link to={props.cta.link} className="btn cta btn-outline-white rounded-pill poppins-bold">
            {HTMLParser.parseHTML(props.cta.text)}
        </Link>
    );
}

const BannerSideBySide = (props) => {
    let bannerSubHeading = '', bannerHeading = '', bannerDesc = '', bannerDisclaimer = '', bannerCTA = '';

    if (props.subheading && props.subheading.length > 0) {
        bannerSubHeading = <BannerSubHeading {...props} />;
    }

    if (props.heading && props.heading.length > 0) {
        bannerHeading = <BannerHeading {...props} />;
    }

    if (props.description && props.description.length > 0) {
        bannerDesc = <BannerDescription {...props} />;
    }

    if (props.disclaimer && props.disclaimer.length > 0) {
        bannerDisclaimer = <BannerDisclaimer {...props} />;
    }

    if (props.cta && props.cta.link && props.cta.link.length > 0) {
        bannerCTA = <BannerCTA {...props} />
    }

    return (
        <>
            <div className="row bg-primary banner-side-by-side align-items-center justify-content-center">
                <div className="col">
                    <div className="row align-items-center justify-content-end">
                        <div className="col-12 col-lg-6 order-lg-1 banner-container pe-0">
                            <img src={props.BannerImage} className="mw-100" alt="Ready to consult banner" />
                        </div>
                        <div className="d-lg-none col-12 col-lg-6 order-lg-0 d-flex align-items-center py-5 py-lg-0 text-container">
                            <div className="content d-flex flex-column">
                                <div className="text-content d-flex flex-column">
                                    {bannerSubHeading}
                                    {bannerHeading}
                                    {bannerDesc}
                                    {bannerDisclaimer}
                                </div>
                                {bannerCTA}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col mw-1600 mx-auto d-none d-lg-block position-absolute left-0 right-0">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6 order-lg-1 banner-container d-lg-none">
                            <img src={props.BannerImage} className="mw-100" alt="Ready to consult banner" />
                        </div>
                        <div className="col-12 col-lg-6 order-lg-0 d-flex align-items-center py-5 py-lg-0 text-container">
                            <div className="content d-flex flex-column">
                                <div className="text-content d-flex flex-column">
                                    {bannerSubHeading}
                                    {bannerHeading}
                                    {bannerDesc}
                                    {bannerDisclaimer}
                                </div>
                                {bannerCTA}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default BannerSideBySide;
