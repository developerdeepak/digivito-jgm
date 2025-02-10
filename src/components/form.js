const InputField = (config) => {
    return (
        <input type={config.type} className={"form-control " + (config.additionalClasses ? config.additionalClasses : "")} id={config.id} />
    );
};

const TextArea = (config) => {
    return (
        <textarea className={"form-control " + (config.additionalClasses ? config.additionalClasses : "")} id={config.id} rows={config.rows || 3}></textarea>
    );
};

const FormColumn = ({ col }) => {
    let inputField = '';

    switch (col.element) {
        case 'input':
            inputField = (<InputField {...col} />);
            break;
        case 'textarea':
            inputField = (<TextArea {...col} />);
            break;
        default:
            break;
    }

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

    if (props.heading && props.heading.length > 0) {
        formHeading = (<h2 className="h3 poppins-semibold mb-3">{props.heading}</h2>);
    }

    if (props.fields && props.fields.length > 0) {
        props.fields.forEach((row, index) => {
            formRows.push(<FormRow row={row} key={index} />)
        });
    }

    return (
        <form>
            {formHeading}
            {formRows}
            <div className="col-12">
                <button type="submit" className="btn btn-dark rounded-pill poppins-bold">{props.btns.submit.text}</button>
            </div>
        </form>
    );
};

export default Form;