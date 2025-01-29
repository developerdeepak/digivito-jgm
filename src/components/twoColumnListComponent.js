import HTMLParser from "../helpers/htmlParser";
import Icons from "../images/icons";

const ListColumn = (props) => {
    console.log(props);
    const columnItems = [];

    props.items.forEach((item, index) => {
        columnItems.push(
            <li class="list-group-item d-flex justify-content-between align-items-center px-0" key={index}>
                {item}
                <img src={Icons.ArrowRightPrimary} className="mw-100" alt="Right arrow primary icon" />
            </li>
        );
    });

    return (
        <div className="col list">
            <h4 className="poppins-bold text-primary text-uppercase position-relative d-flex align-items-center h4">
                <span class="bg-white pe-3">{props.heading}</span>
            </h4>
            <ul class="list-group list-group-flush">
                {columnItems}
            </ul>
        </div>
    );
};

const TwoColumnListComponent = (props) => {
    const listColumns = [];

    props.columns.forEach((column, index) => {
        listColumns.push(<ListColumn columnIndex={index} key={index} {...column} />)
    });

    return (
        <div className="row two-col-list-section">
            <div className="col mw-1600 mx-auto">
                <h2 className="mb-4 poppins-bold h2 text-center">{props.heading}</h2>
                <p className="text-center">{HTMLParser.parseHTML(props.description)}</p>
                <div className="mw-1400 mx-auto">
                    <div className="row flex-column flex-lg-row columns">
                        {listColumns}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoColumnListComponent;
