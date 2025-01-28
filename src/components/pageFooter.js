import React from 'react';
import AppData from '../data/data.json';
import logoWhite from '../images/logo-white.svg';
import FooterNavGroup from './footerNavGroup';
import Helpers from '../helpers';

const PageFooter = () => {
    const NavItemsHTML = [];

    AppData.footer.navigation.forEach((item, index) => {
        NavItemsHTML.push(<FooterNavGroup {...item} key={index} />);
    });
    return (
        <footer className="App-footer text-white">
            <div className="row navigation-row bg-secondary">
                <div className="col mx-auto">
                    <div className="logo-container text-center border-bottom border-white d-none d-lg-block">
                        <img src={logoWhite} className="footer-logo" alt="J.G.Miller header logo" />
                    </div>
                    <div className="footer-nav-container d-flex flex-column flex-lg-row">
                        {NavItemsHTML}
                    </div>
                </div>
            </div>
            <div className="row copyright-row bg-dark">
                <div className="col mx-auto">
                    <p className="text-center my-0 copyright-text">
                        {Helpers.HTMLParser.parseHTML(AppData.footer.copyrightText)}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default PageFooter;
