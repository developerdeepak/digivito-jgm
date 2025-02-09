import Icons from "../images/icons";

const QuoteCEO = () => {
    return (
        <div className="row quote-ceo-comp">
            <div className="col mw-1600 mx-auto text-center">
                <picture>
                    <source media="(min-width:1024px)" srcSet={Icons.CEOQuoteLg} />
                    <img src={Icons.CEOQuoteSm} alt="CEO Quote message" className="mw-100" />
                </picture>
            </div>
        </div>
    );
};

export default QuoteCEO;
