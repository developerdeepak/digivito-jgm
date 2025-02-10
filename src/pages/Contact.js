import React, { useState } from 'react';
import Components from "../components";
import AppData from '../data/data.json';
import HeroBannerImage from '../images/contact-hero-banner-lg.jpg';
import BannerImage from '../images/hand-shaking-business.jpg';

const pageSpecificData = AppData.pages.contact;

const Contact = () => {
    const [heroBannerExtraSpace, setHeroBannerExtraSpace] = useState(0);

    return (
        <>
            <Components.HeroBanner {...pageSpecificData.heroBanner} HeroImage={HeroBannerImage} setHeroBannerExtraSpace={setHeroBannerExtraSpace}>
                <div className="contact-form-container text-start">
                    <Components.Form {...pageSpecificData.form} />
                </div>
            </Components.HeroBanner>
            <Components.TwoColumnList {...pageSpecificData.reachOut} addOnPadding={heroBannerExtraSpace} />
            <Components.BannerSideBySide {...pageSpecificData.getStarted} BannerImage={BannerImage} />
        </>
    );
}

export default Contact;