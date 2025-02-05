import ceoRoundImage from '../images/ceo-round.png';
import HTMLParser from '../helpers/htmlParser';

const AboutCEO = (props) => {
    return (
        <div className="row about-ceo-comp">
            <div className="col mw-1600 mx-auto">
                <div className="row content-container">
                    <div className="col-12 col-xl-5 d-flex align-items-center justify-content-center">
                        <div className="titles-container">
                            <h4 className="text-primary h4 mb-0 poppins-bold">
                                {props.subheading}
                            </h4>
                            <h2 className="h2 mb-0 poppins-bold">{props.heading}</h2>
                        </div>
                    </div>
                    <div className="col-12 col-xl-7">
                        <div className="about-ceo-content position-relative bg-dark">
                            <img src={ceoRoundImage} className="position-absolute" alt="CEO" />
                            <h2 className="h2 mb-0 poppins-bold text-primary">{props.name}</h2>
                            <div className="text-white description">
                                {HTMLParser.parseHTML(props.details)}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutCEO;
