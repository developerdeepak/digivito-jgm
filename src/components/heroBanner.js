import HTMLParser from "../helpers/htmlParser";

const HeroBanner = (props) => {
    let bannerDesc = '';
    let bannerClasses = 'row align-items-center position-relative hero-banner';

    if (props.description && props.description.length > 0) {
        bannerDesc = props.description;
    }

    if (props.addOnClass && props.addOnClass.length > 0) {
        bannerClasses += " "+props.addOnClass;
    }

    return (
        <div className={bannerClasses}>
            <img src={props.HeroImage} className="mw-100 p-0" alt="Hero banner" />
            <div className="col mw-1600 mx-auto text-white banner-content">
                <h1 className="poppins-bold h2 m-0">{HTMLParser.parseHTML(props.heading)}</h1>
                <p className="banner-desc">{HTMLParser.parseHTML(bannerDesc)}</p>
                {props.children}
            </div>
        </div>
    );
};

export default HeroBanner;
