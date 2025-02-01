import React, { Component } from 'react';
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
            <h4 className="poppins-bold text-primary text-uppercase position-relative d-flex align-items-center h4">
                <span className="bg-white pe-3">{props.heading}</span>
            </h4>
            <ul className="list-group list-group-flush">
                {columnItems}
            </ul>
        </div>
    );
};

class TwoColumnListComponent extends Component {
    constructor(props) {
        super(props);
        this.sectionRef = React.createRef();
    }

    updateComponentTopPadding() {
        let elementPadding = 64;

        if (this.props.addOnPadding && this.props.addOnPadding > 0) {
            elementPadding += this.props.addOnPadding;
        }

        this.sectionRef.current.style.paddingTop = `${elementPadding}px`;
    }

    componentDidUpdate(prevProps) {
        if(prevProps.addOnPadding !== this.props.addOnPadding) {
            this.updateComponentTopPadding();
        }
    }

    render() {
        const listColumns = [];

        this.props.columns.forEach((column, index) => {
            listColumns.push(<ListColumn columnIndex={index} key={index} {...column} />);
        });

        return (
            <div className="row two-col-list-section" ref={this.sectionRef}>
                <div className="col mw-1600 mx-auto">
                    <h2 className="mb-4 poppins-bold h2 text-center">{this.props.heading}</h2>
                    <p className="text-center">{HTMLParser.parseHTML(this.props.description)}</p>
                    <div className="columns-group mx-auto">
                        <div className="row flex-column flex-lg-row columns">
                            {listColumns}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TwoColumnListComponent;
