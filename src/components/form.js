import { createElement } from 'react';

const FormColumn = ({ col }) => {
    let inputProps = {
        id: col.id,
        name: col.name,
        type: col.type,
        className: `form-control ${col.additionalClasses}`
    };

    if (col.required) {
        inputProps.required = col.required
    }

    let inputField = createElement(
        col.element,
        inputProps
    );

    return (
        <div className="col mb-3">
            <label htmlFor={col.id} className="form-label">{col.label}</label>
            {inputField}
        </div>
    );
};

const FormRow = ({ row }) => {
    let columns = [];

    if (row.length > 0) {
        row.forEach((col, index) => {
            columns.push(<FormColumn col={col} key={index} />);
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
    const submitForm = (event) => {
        let formData = {};
        event.keys().forEach(key => {
            formData[key] = event.get(key);
        });

        if (props.handleFormSubmit) {
            props.handleFormSubmit(formData);
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
        <form action={submitForm}>
            {formHeading}
            {formRows}
            <div className="col-12">
                <button type="submit" className="btn btn-dark rounded-pill poppins-bold">{props.btns.submit.text}</button>
            </div>
        </form>
    );
};

export default Form;