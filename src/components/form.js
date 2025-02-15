import { createElement } from 'react';

const FormColumn = ({ config }) => {
    let inputProps = {
        id: config.id,
        name: config.name,
        type: config.type,
        className: `form-control ${config.additionalClasses ? config.additionalClasses : ''}`
    };

    if (config.required) {
        inputProps.required = config.required
    }

    if (config.rows) {
        inputProps.rows = config.rows;
    }

    let inputField = createElement(
        config.element,
        inputProps
    );

    return (
        <div className="col mb-3">
            <label htmlFor={config.id} className="form-label">{config.label}</label>
            {inputField}
        </div>
    );
};

const FormRow = ({ row }) => {
    let columns = [];

    if (row.length > 0) {
        row.forEach((col, index) => {
            columns.push(<FormColumn config={col} key={index} />);
        });
    }

    return (
        <div className="row flex-column flex-sm-row">
            {columns}
        </div>
    );
};

const Form = (props) => {
    let formHeading = '';
    let formRows = [];

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (props.setFormData) {
            props.setFormData(Object.fromEntries(new FormData(event.target)));
        }
    };

    if (props.heading && props.heading.length > 0) {
        formHeading = (<h2 className="h3 poppins-semibold mb-3">{props.heading}</h2>);
    }

    if (props.fields && props.fields.length > 0) {
        props.fields.forEach((row, index) => {
            formRows.push(<FormRow row={row} key={index} />)
        });
    }

    return (
        <form onSubmit={handleFormSubmit}>
            {formHeading}
            {formRows}
            <div className="col-12">
                <button type="submit" className="btn btn-dark rounded-pill poppins-bold">{props.btns.submit.text}</button>
            </div>
        </form>
    );
};

export default Form;