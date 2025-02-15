import HTMLParser from "../helpers/htmlParser";

const ContentRow = (props) => {
    return (
        <div className="content-section row mb-3">
            <div className="col mw-1024 mx-auto">
                {HTMLParser.parseHTML(props.section)}
            </div>
        </div>
    )
};

const HTMLContent = (props) => {
    const sections = [];

    if (props.sections && props.sections.length > 0) {
        props.sections.forEach((section, index) => {
            sections.push(<ContentRow section={section} key={index} />)
        });
    }

    console.log()

    return (
        <div className="my-5 html-content-page">
            <h1 className="h1 poppins-bold text-center mb-5">{props.heading}</h1>
            {sections}
        </div>
    );
};

export default HTMLContent;
