import { Link, NavLink } from "react-router-dom";

import Icons from "../images/icons";
import AppData from '../data/data.json';

const HeaderNavItem = (props) => {
    return (
        <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'nav-link active poppins-bold' : 'nav-link')} to={props.link} onClick={props.onClick}>{props.name}</NavLink>
        </li>
    );
};

const toggleNavOffcanvas = () => {
    document.querySelector('.offcanvas .btn-close').click();
}

const HeaderCTA = () => {
    const ctaProps = AppData.header.cta;

    if (ctaProps.link) {
        return (
            <Link to={ctaProps.link} className="btn btn-primary text-white cta header-cta poppins-medium border-0 rounded-pill" alt="Book a free consultaion link" onClick={toggleNavOffcanvas}>
                {ctaProps.text}
            </Link>
        );
    }

    if (ctaProps.openPopup) {
        return (
            <button className="btn btn-primary text-white cta header-cta poppins-medium border-0 rounded-pill" data-bs-toggle="modal" data-bs-target={'#' + ctaProps.targetPopup}>
                {ctaProps.text}
            </button>
        );
    }
}

const PageHeader = () => {
    const NavItemsHTML = [];

    AppData.navItems.forEach((item, index) => {
        NavItemsHTML.push(<HeaderNavItem onClick={toggleNavOffcanvas} {...item} key={index} />);
    });

    return (
        <header className="App-header">
            <div className="row contact-row">
                <div className="col d-flex justify-content-end align-items-center mx-auto mw-1600">
                    <a href={"tel:" + AppData.contact.phone} className="poppins-medium text-black text-decoration-none d-flex align-items-center contact-phone">
                        <img src={Icons.PhoneIconBlack} className="phone-icon contact-icon" width="22" height="26" alt="phone icon" />
                        <span>{AppData.contact.phone}</span>
                    </a>
                    <a href={"mailto:" + AppData.contact.mail} className="poppins-medium text-black text-decoration-none d-flex align-items-center contact-mail">
                        <img src={Icons.MailIconBlack} className="mail-icon contact-icon" width="22" height="20" alt="mail icon" />
                        <span>{AppData.contact.mail}</span>
                    </a>
                </div>
            </div>
            <div className="row main-header bg-dark">
                <nav className="navbar navbar-dark bg-dark navbar-expand-lg mx-auto mw-1600">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="/">
                            <picture>
                                <source media="(min-width:992px)" width="270" height="74" srcSet={Icons.LogoPrimary} />
                                <img src={Icons.LogoPrimary} width="205" height="56" className="header-logo" alt="J.G.Miller header logo" />
                            </picture>
                        </Link>
                        <button className="navbar-toggler border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon w-auto h-auto">
                                <img src={Icons.MobileMenu} className="mobile-menu-icon" alt="Mobile menu" />
                            </span>
                        </button>
                        <div className="offcanvas offcanvas-end border-start-0 text-bg-dark" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                            <div className="offcanvas-header border-bottom">
                                <img src={Icons.LogoPrimary} width="164" height="44" className="header-logo" alt="J.G.Miller header logo" />
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div className="offcanvas-body align-items-center">
                                <ul className="navbar-nav justify-content-end flex-grow-1 poppins-regular">
                                    {NavItemsHTML}
                                </ul>
                                <HeaderCTA />
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );

}

export default PageHeader;
