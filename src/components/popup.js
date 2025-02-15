const PopUp = (props) => {
    return (
        <div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby={props.id + "Label"} aria-hidden="true">
            <div className="modal-dialog modal-fullscreen-sm-down">
                <div className="modal-content p-3">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5 text-dark" id={props.id + "Label"}>{props.heading}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
