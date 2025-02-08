import Icons from "../images/icons";
import HTMLParser from "../helpers/htmlParser";

const GetInTouch = (props) => {
    return (
        <div className="row get-in-touch bg-dark">
            <div className="col mw-1600 mx-auto text-center d-flex flex-column align-items-center">
                <h2 className="h2 mb-0 poppins-bold text-white">{props.heading}</h2>
                <p className="text-white">{HTMLParser.parseHTML(props.description)}</p>
                <div className="row justify-content-center align-items-center w-100 tiles-container">
                    <div className="col-12 col-lg-4 bg-white">
                        <div className="tile-content">
                            <a href={"tel:" + props.contact.phone} className="poppins-bold text-decoration-none contact-phone d-flex flex-column align-items-center">
                                <img src={Icons.PhonePrimary} alt="Phone primary icon" />
                                <span className="text-black">{props.contact.phone}</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 bg-primary">
                        <div className="tile-content address-tile-content d-flex flex-column align-items-center">
                            <img src={Icons.LocationBigPrimary} alt="Address primary icon" />
                            <span className="text-white">{HTMLParser.parseHTML(props.contact.address)}</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 bg-white">
                        <div className="tile-content">
                            <a href={"mailto:" + props.contact.mail} className="text-decoration-none contact-email d-flex flex-column align-items-center">
                                <img src={Icons.MailPrimary} alt="Mail primary icon" />
                                <span className="text-black">{props.contact.mail}</span>
                                <button className="btn btn-outline-primary rounded-pill poppins-bold">{props.contact.mailBtnText}</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GetInTouch;
