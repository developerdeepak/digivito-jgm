import { Link } from "react-router-dom";

import logo from '../images/logo.svg';
import phoneIcon from '../images/icons/phone.svg';
import mailIcon from '../images/icons/mail.svg';
import mobileMenuIcon from '../images/icons/mobile-menu.svg';
import HeaderNavItem from "./headerNavItem";
import AppData from '../data/data.json';

const toggleNavOffcanvas = () => {
    document.querySelector('.offcanvas .btn-close').click();
}

const PageHeader = () => {

    const NavItemsHTML = [];

    AppData.navItems.forEach((item, index) => {
        NavItemsHTML.push(<HeaderNavItem onClick={toggleNavOffcanvas} {...item} key={index} />);
    });

    return (
        <header className="App-header">
            <div className="row contact-row">
                <div className="col d-flex justify-content-center justify-content-lg-end align-items-center mx-auto">
                    <a href={"tel:" + AppData.contact.phone} className="poppins-medium text-black text-decoration-none d-flex align-items-center contact-phone">
                        <img src={phoneIcon} className="phone-icon contact-icon" alt="phone icon" />
                        <span>{AppData.contact.phone}</span>
                    </a>
                    <a href={"mailto:" + AppData.contact.mail} className="poppins-medium text-black text-decoration-none d-flex align-items-center contact-mail">
                        <img src={mailIcon} className="mail-icon contact-icon" alt="mail icon" />
                        <span>{AppData.contact.mail}</span>
                    </a>
                </div>
            </div>
            <div className="row main-header bg-dark">
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg mx-auto">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} className="header-logo" alt="J.G.Miller header logo" />
                        </Link>
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon w-auto h-auto">
                                <img src={mobileMenuIcon} className="mobile-menu-icon" alt="Mobile menu" />
                            </span>
                        </button>
                        <div className="offcanvas offcanvas-end border-start-0 text-bg-dark" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header border-bottom">
                                <img src={logo} className="header-logo" alt="J.G.Miller header logo" />
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body align-items-center">
                                <ul className="navbar-nav justify-content-end flex-grow-1 poppins-regular">
                                    {NavItemsHTML}
                                </ul>
                                <Link to={AppData.header.cta.link} className="btn btn-primary text-white cta header-cta poppins-medium border-0 rounded-pill" alt="Book a free consultaion link" onClick={toggleNavOffcanvas}>
                                    {AppData.header.cta.text}
                                </Link>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );

}

export default PageHeader;
