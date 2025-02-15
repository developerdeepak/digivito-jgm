import HTMLParser from "../helpers/htmlParser";

const CarouselIndicators = (props) => {
    return (
        <button type="button" data-bs-target={props.id} data-bs-slide-to={props.index} className={"rounded-circle border-primary " + (props.index === 0 ? 'active' : '')} aria-label={"Slide " + (props.index + 1)}></button>
    );
};

const TestimonialCarouselItem = (props) => {
    let itemClasses = "carousel-item text-start";

    if (props.isActive) {
        itemClasses += " active";
    }

    return (
        <div className={itemClasses}>
            <div className="user-comment-detail bg-dark">
                <h4 className="h5 poppins-bold text-primary mb-3 text-center text-lg-start">{props.username}</h4>
                <p className="mb-0">{HTMLParser.parseHTML(props.comment)}</p>
            </div>
        </div>
    );
};

const Testimonials = (props) => {
    let carouselItems = [];
    let carouselIndicators = [];

    if (props.items && props.items.length > 0) {
        props.items.forEach((item, index) => {
            carouselItems.push(
                <TestimonialCarouselItem {...item} key={index} />
            );
            carouselIndicators.push(
                <CarouselIndicators id="#testimonialsSlider" index={index} key={index} />
            );
        });
    }

    return (
        <div className="row testimonials-row">
            <div className="col mw-1600 mx-auto">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 text-center text-lg-start d-flex flex-column-reverse">
                        <h2 className="h2 poppins-bold mb-0">{HTMLParser.parseHTML(props.heading)}</h2>
                        <h3 className="text-primary poppins-bold mb-0">{props.subheading}</h3>
                    </div>
                    <div className="col-12 col-lg-7 d-flex flex-column align-items-center">
                        <div id="testimonialsSlider" className="carousel slide text-white text-center" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                {carouselItems}
                            </div>
                            <div className="carousel-indicators position-static mb-0 justify-content-lg-start">
                                {carouselIndicators}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
