import { createElement } from 'react';

const FormColumn = ({ config, formProps }) => {
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
            {
                Object.hasOwn(formProps.formValidationErrors, config.name) ? <>
                    <p className="mb-0 mt-2">{formProps.formValidationErrors[config.name]}</p>
                </> : ''
            }
        </div>
    );
};

const FormRow = ({ row, formProps }) => {
    let columns = [];

    if (row.length > 0) {
        row.forEach((col, index) => {
            columns.push(<FormColumn config={col} key={index} formProps={formProps} />);
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
        if (props.isAjax) {
            event.preventDefault();
            if (props.setFormData) {
                props.setFormData(Object.fromEntries(new FormData(event.target)));
            }
        }
    };

    if (props.heading && props.heading.length > 0) {
        formHeading = (<h2 className="h3 poppins-semibold mb-3">{props.heading}</h2>);
    }

    if (props.fields && props.fields.length > 0) {
        props.fields.forEach((row, index) => {
            formRows.push(<FormRow row={row} key={index} formProps={props} />)
        });
    }

    return (
        <form onSubmit={handleFormSubmit} action={(props.actionURL && props.actionURL.length > 0) ? props.actionURL : ''} method={props.method || 'GET'}>
            {formHeading}
            {formRows}
            <div className="col-12">
                <button type="submit" className="btn btn-dark rounded-pill poppins-bold submit-btn">{props.btns.submit.text}</button>
            </div>
        </form>
    );
};

export default Form;