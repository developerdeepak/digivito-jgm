import HTMLParser from "../helpers/htmlParser";

const HeadingAndParagraph = (props) => {
    let heading = '', description = '';

    if (props.heading && props.heading.length > 0) {
        heading = props.heading;
    }

    if (props.description && props.description.length > 0) {
        description = props.description;
    }

    return (
        <div className="row heading-paragraph-comp">
            <div className="col mw-1600 mx-auto text-center d-flex flex-column">
                <h2 className="mb-0 poppins-bold h2 heading">
                    {HTMLParser.parseHTML(heading)}
                </h2>
                <p className="mb-0 description">
                    {HTMLParser.parseHTML(description)}
                </p>
            </div>
        </div>
    );
};

export default HeadingAndParagraph;
