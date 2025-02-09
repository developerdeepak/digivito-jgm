import Icons from "../images/icons";
import HTMLParser from "../helpers/htmlParser";

const TestimonialCarouselItem = (props) => {
    let itemClasses = "carousel-item text-start";

    if (props.isActive) {
        itemClasses += " active";
    }

    return (
        <div className={itemClasses}>
            <img src={Icons.TestimonialUser} alt="testimonial user" loading="lazy" />
            <div className="user-comment-detail bg-dark">
                <h4 className="h5 poppins-bold text-primary mb-3 text-center text-lg-start">{props.username}</h4>
                <p className="mb-0">{HTMLParser.parseHTML(props.comment)}</p>
            </div>
        </div>
    );
};

const Testimonials = (props) => {
    let carouselItems = [];

    if (props.items && props.items.length > 0) {
        props.items.forEach((item, index) => {
            carouselItems.push(
                <TestimonialCarouselItem {...item} key={index} />
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
                                <button type="button" data-bs-target="#testimonialsSlider" data-bs-slide-to="0" className="rounded-circle border-primary active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#testimonialsSlider" data-bs-slide-to="1" className="rounded-circle border-primary" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#testimonialsSlider" data-bs-slide-to="2" className="rounded-circle border-primary" aria-label="Slide 3"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
