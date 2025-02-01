import React, { useState } from 'react';
import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/contact-hero-banner-lg.jpg';

const pageSpecificData = AppData.sections.pageSpecific.contact;

const ContactForm = () => {
    return (
        <div className="contact-form-container rounded">
            <p>Please fill the form and we will contact you</p>
            <form className="row">
                <div className="col-12 mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
                    <input type="tel" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Contact Reason</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Anything we should know?</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-dark">Get In touch</button>
                </div>
            </form>
        </div>
    );
};

const Contact = () => {
    const [heroBannerExtraSpace, setHeroBannerExtraSpace] = useState(0);

    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage} setHeroBannerExtraSpace={setHeroBannerExtraSpace}>
                <ContactForm />
            </Components.HeroBanner>
            <Components.TwoColumnListComponent {...pageSpecificData.reachOut} addOnPadding={heroBannerExtraSpace} />
            <Components.GetStarted />
        </>
    );
}

export default Contact;