import HTMLParser from "../helpers/htmlParser";
import Icons from "../images/icons";

const ComponentSubheading = (props) => {
    return (
        <p className="mb-0 poppins-bold text-primary sub-heading">
            {HTMLParser.parseHTML(props.subheading)}
        </p>
    );
};

const ComponentHeading = (props) => {
    let headingClasses = "mb-0 poppins-bold h2 heading";

    if(props.isDark) {
        headingClasses += " text-white";
    }

    return (
        <h2 className={headingClasses}>
            {HTMLParser.parseHTML(props.heading)}
        </h2>
    );
};

const ComponentDescription = (props) => {
    let descClasses = "mb-0 description";

    if(props.isDark) {
        descClasses += " text-white";
    }
    
    return (
        <p className={descClasses}>
            {HTMLParser.parseHTML(props.description)}
        </p>
    );
};

const ComponentTile = (props) => {
    let cardClassList = "card rounded-0 tile-card";

    if(props.isDark) {
        cardClassList += " bg-white text-dark";
    } else {
        cardClassList += " bg-dark text-white";
    }

    return (
        <div className="g-col-12 g-col-md-6">
            <div className={cardClassList}>
                <div className="card-body d-flex justify-content-between align-items-start text-start">
                    <div className="tile-text-content">
                        <h3 className="card-title poppins-bold text-primary">{HTMLParser.parseHTML(props.title)}</h3>
                        <p className="card-text">{HTMLParser.parseHTML(props.detail)}</p>
                    </div>
                    <img src={Icons[props.icon]} className="mw-100 p-0" alt="Tile icon" loading="lazy" />
                </div>
            </div>
        </div>
    );
};

const TwoColumnTiles = (props) => {
    let componentTopContainerClasses = "row two-col-tiles-section";
    let subheading = '', heading = '', description = '', tiles = [];

    if (props.isDark) {
        componentTopContainerClasses += " bg-dark";
    }

    if (props.subheading && props.subheading.length > 0) {
        subheading = <ComponentSubheading {...props} />
    }

    if (props.heading && props.heading.length > 0) {
        heading = <ComponentHeading {...props} />
    }

    if (props.description && props.description.length > 0) {
        description = <ComponentDescription {...props} />
    }

    if (props.tiles && props.tiles.length > 0) {
        props.tiles.forEach((tile, index) => {
            tiles.push(
                <ComponentTile {...tile} isDark={props.isDark} key={index} />
            );
        });
    }

    return (
        <div className={componentTopContainerClasses}>
            <div className="col mw-1600 mx-auto text-center d-flex flex-column">
                {subheading}
                {heading}
                {description}
                {tiles && tiles.length > 0 ? <div className="tiles grid mx-auto">{tiles}</div> : ''}
            </div>
        </div>
    );
};

export default TwoColumnTiles;
