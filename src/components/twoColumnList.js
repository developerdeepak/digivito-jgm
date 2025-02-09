import HTMLParser from "../helpers/htmlParser";
import Icons from "../images/icons";

const ListColumn = (props) => {
    const columnItems = [];

    props.items.forEach((item, index) => {
        columnItems.push(
            <li className="list-group-item d-flex justify-content-between align-items-center px-0 bg-transparent" key={index}>
                {item}
                <img src={Icons.ArrowRightPrimary} className="mw-100" alt="Right arrow primary icon" />
            </li>
        );
    });

    return (
        <div className="col list">
            <h3 className="poppins-bold text-primary text-uppercase position-relative h4">
                <span>{props.heading}</span>
            </h3>
            <ul className="list-group list-group-flush">
                {columnItems}
            </ul>
        </div>
    );
};

const TwoColumnList = (props) => {
    const listColumns = [];
    let elementPadding = 64;

    if (props.addOnPadding && props.addOnPadding > 0) {
        elementPadding += props.addOnPadding;
    }

    props.columns.forEach((column, index) => {
        listColumns.push(<ListColumn key={index} {...column} />);
    });

    return (
        <div className="row two-col-list-section" style={{ paddingTop: elementPadding + 'px' }}>
            <div className="col mw-1600 mx-auto">
                <h2 className="mb-4 poppins-bold h2 text-center">{props.heading}</h2>
                <p className="text-center">{HTMLParser.parseHTML(props.description)}</p>
                <div className="columns-group mx-auto">
                    <div className="row flex-column flex-lg-row columns">
                        {listColumns}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoColumnList;
