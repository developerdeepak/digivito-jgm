import HTMLParser from '../helpers/htmlParser';
import { Link } from 'react-router-dom';

const BannerSubHeading = (props) => {
    return (
        <p className={"mb-0 poppins-bold sub-heading " + (props.isSubheadingPrimary ? 'text-primary' : 'text-white')}>
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

const BannerCTA = (props) => {
    return (
        <Link to={props.cta.link} className="btn cta btn-primary text-white rounded-pill poppins-bold">
            {HTMLParser.parseHTML(props.cta.text)}
        </Link>
    );
}

const WhyChooseUs = (props) => {
    let bannerSubHeading = '', bannerHeading = '', bannerDesc = '', bannerCTA = '';

    if (props.subheading && props.subheading.length > 0) {
        bannerSubHeading = <BannerSubHeading {...props} />;
    }

    if (props.heading && props.heading.length > 0) {
        bannerHeading = <BannerHeading {...props} />;
    }

    if (props.description && props.description.length > 0) {
        bannerDesc = <BannerDescription {...props} />;
    }

    if (props.cta && props.cta.link && props.cta.link.length > 0) {
        bannerCTA = <BannerCTA {...props} />
    }

    return (
        <>
            <div className={"row banner-side-by-side why-choose-banner align-items-center justify-content-center " + (props.bannerBgClass ? props.bannerBgClass : "bg-primary")}>
                <div className="col">
                    <div className={"row align-items-center " + (props.isBannerRight ? "justify-content-end" : "")}>
                        <div className={"col-12 banner-container d-none d-lg-block " + (props.isBannerRight ? "pe-0" : "ps-0")}>
                            <img src={props.BannerImage} className="w-100 desktop-banner rounded" alt="Ready to consult banner" />
                        </div>
                        <div className="d-lg-none col-12 d-flex align-items-center py-5 py-lg-0 text-container">
                            <div className="content d-flex flex-column">
                                <div className="text-content d-flex flex-column">
                                    {bannerSubHeading}
                                    {bannerHeading}
                                    {bannerDesc}
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <img src={props.BannerImage} className="w-100 mobile-banner" alt="Ready to consult banner" />
                                    </div>
                                </div>
                                {bannerCTA}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col mw-1600 mx-auto d-none d-lg-block">
                    <div className={"row align-items-center " + (!props.isBannerRight ? "justify-content-end" : "")}>
                        <div className="col-12 d-flex align-items-center py-5 py-lg-0 text-container">
                            <div className="content d-flex flex-column">
                                <div className="text-content d-flex flex-column">
                                    {bannerSubHeading}
                                    {bannerHeading}
                                    {bannerDesc}
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

export default WhyChooseUs;
