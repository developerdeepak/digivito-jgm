import React, { useState } from 'react';
import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/contact-hero-banner-lg.jpg';
import BannerImage from '../images/hand-shaking-business.jpg';

const pageSpecificData = AppData.pages.contact;

const ContactForm = () => {
    return (
        <div className="contact-form-container">
            <p className="form-heading poppins-semibold">{pageSpecificData.form.heading}</p>
            <form className="row">
                <div className="col-12 mb-3">
                    <label htmlFor="contactName" className="form-label">{pageSpecificData.form.fields.name.label}</label>
                    <input type="text" className="form-control rounded-pill" id="contactName" />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="contactEmail" className="form-label">{pageSpecificData.form.fields.email.label}</label>
                    <input type="email" className="form-control rounded-pill" id="contactEmail" />
                </div>
                <div className="col-md-6 mb-3">
                    <label htmlFor="contactPhone" className="form-label">{pageSpecificData.form.fields.phone.label}</label>
                    <input type="tel" className="form-control rounded-pill" id="contactPhone" />
                </div>
                <div className="col-12 mb-3">
                    <label htmlFor="contactReason" className="form-label">{pageSpecificData.form.fields.reason.label}</label>
                    <input type="text" className="form-control rounded-pill" id="contactReason" />
                </div>
                <div className="mb-3">
                    <label htmlFor="contactShouldKnow" className="form-label">{pageSpecificData.form.fields.shouldKnow.label}</label>
                    <textarea className="form-control" id="contactShouldKnow" rows="3"></textarea>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-dark rounded-pill poppins-bold">{pageSpecificData.form.btns.submit.text}</button>
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
            <Components.TwoColumnList {...pageSpecificData.reachOut} addOnPadding={heroBannerExtraSpace} />
            <Components.BannerSideBySide {...pageSpecificData.getStarted} BannerImage={BannerImage} />
        </>
    );
}

export default Contact;