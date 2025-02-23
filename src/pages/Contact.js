import { useState } from 'react';
import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/contact-hero-banner-lg.jpg';
import BannerImage from '../images/hand-shaking-business.jpg';
import HTMLParser from '../helpers/htmlParser';

const pageSpecificData = AppData.pages.contact;

const sendEmail = (formData) => {
    const requestOptions = {
        method: pageSpecificData.form.method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            ...formData,
            subjectLine: HTMLParser.parseDynamicString(pageSpecificData.sendEmail.subjectLine, formData.name)
        })
    };
    return fetch(pageSpecificData.form.actionURL, requestOptions).then(response => {
        return new Promise((resolve, reject) => {
            response.json().then(json => {
                if(response.ok) {
                    resolve(json);
                } else {
                    reject(json);
                }
            });
        });
    });
}

const ContactFormSubmitted = (props) => {
    return (
        <div className="form-success-container">
            <p className="h4 mb-4">{HTMLParser.parseHTML(pageSpecificData.formSubmit.heading)}</p>
            <button type="submit" className="btn btn-sm btn-outline-light rounded-pill py-2 px-4 fs-6" onClick={props.resetForm}>{pageSpecificData.formSubmit.resetBtn.text}</button>
        </div>
    );
}

const Contact = () => {
    const [heroBannerExtraSpace, setHeroBannerExtraSpace] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formValidationErrors, setFormValidationErrors] = useState({});

    function setFormData(formData) {
        setFormValidationErrors({});
        sendEmail(formData).then(res => {
            setFormSubmitted(prev => !prev);
        }).catch(errJson => {
            setFormValidationErrors(errJson);
        });
    }

    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage} setHeroBannerExtraSpace={setHeroBannerExtraSpace}>
                <div className="contact-form-container text-start">
                    {!formSubmitted && <Components.Form {...pageSpecificData.form} setFormData={setFormData} formValidationErrors={formValidationErrors} />}
                    {formSubmitted && <ContactFormSubmitted resetForm={() => setFormSubmitted(false)} />}
                </div>
            </Components.HeroBanner>
            <Components.TwoColumnList {...pageSpecificData.reachOut} addOnPadding={heroBannerExtraSpace} />
            <Components.BannerSideBySide {...pageSpecificData.getStarted} BannerImage={BannerImage} />
        </>
    );
}

export default Contact;