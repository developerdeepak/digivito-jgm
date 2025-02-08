import Icons from "../images/icons";
import HTMLParser from "../helpers/htmlParser";

const TestimonialCarouselItem = (props) => {
    let itemClasses = "carousel-item text-start flex-column align-items-center align-items-lg-start";

    if (props.isActive) {
        itemClasses += " active";
    }

    return (
        <div class={itemClasses}>
            <img src={Icons.TestimonialUser} alt="testimonial user" />
            <div className="user-comment-detail bg-dark">
                <h5 className="poppins-bold text-primary mb-3 text-center text-lg-start">{props.username}</h5>
                <p className="mb-0">{HTMLParser.parseHTML(props.comment)}</p>
            </div>
        </div>
    );
};

const Testimonials = (props) => {
    let carouselItems = [];

    if(props.items && props.items.length > 0) {
        props.items.forEach(item => {
            carouselItems.push(
                <TestimonialCarouselItem {...item} />
            );
        });
    }

    return (
        <div className="row testimonials-row">
            <div className="col mw-1600 mx-auto">
                <div className="row align-items-center">
                    <div className="col-12 col-lg-5 text-center text-lg-start">
                        <h3 className="text-primary poppins-bold mb-0">{props.subheading}</h3>
                        <h2 className="h2 poppins-bold mb-0">{HTMLParser.parseHTML(props.heading)}</h2>
                    </div>
                    <div className="col-12 col-lg-7 d-flex flex-column align-items-center">
                        <div id="testimonialsSlider" class="carousel slide text-white text-center" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                {carouselItems}
                            </div>
                            <div class="carousel-indicators position-static mb-0 justify-content-lg-start">
                                <button type="button" data-bs-target="#testimonialsSlider" data-bs-slide-to="0" class="rounded-circle border-primary active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#testimonialsSlider" data-bs-slide-to="1" class="rounded-circle border-primary" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#testimonialsSlider" data-bs-slide-to="2" class="rounded-circle border-primary" aria-label="Slide 3"></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
