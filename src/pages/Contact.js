import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/contact-hero-banner-lg.jpg';

const pageSpecificData = AppData.sections.pageSpecific.contact;

const ContactForm = () => {
    return (
        <div className="contact-form-container rounded">
            <p>Please fill the form and we will contact you</p>
            <form class="row">
                <div class="col-12 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="col-md-6 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="col-md-6 mb-3">
                    <label for="exampleInputPassword1" class="form-label">Phone</label>
                    <input type="tel" class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="col-12 mb-3">
                    <label for="exampleInputEmail1" class="form-label">Contact Reason</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Anything we should know?</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-12">
                    <button type="submit" class="btn btn-dark">Get In touch</button>
                </div>
            </form>
        </div>
    );
};

const Contact = () => {
    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage}>
                <ContactForm />
            </Components.HeroBanner>
            <Components.TwoColumnListComponent {...pageSpecificData.reachOut} />
            <Components.GetStarted />
        </>
    );
};

export default Contact;