import { Link, NavLink } from "react-router-dom";

import phoneIcon from '../images/icons/phone.svg';
import mailIcon from '../images/icons/mail.svg';
import logo from '../images/logo.svg';
import mobileMenuIcon from '../images/icons/mobile-menu.svg';

const toggleNavOffcanvas = () => {
    document.querySelector('.offcanvas .btn-close').click();
}

const PageHeader = () => {

    return (
        <header className="App-header">
            <div className="row contact-row">
                <div className="col d-flex justify-content-center justify-content-lg-end align-items-center mx-auto">
                    <a href="tel:(801) 872-9889" className="poppins-medium font-14 text-black text-decoration-none d-flex align-items-center contact-phone">
                        <img src={phoneIcon} className="phone-icon contact-icon" alt="phone icon" />
                        <span>(801) 872-9889</span>
                    </a>
                    <a href="mailto:jgmiller@domain.com" className="poppins-medium font-14 text-black text-decoration-none d-flex align-items-center contact-mail">
                        <img src={mailIcon} className="mail-icon contact-icon" alt="mail icon" />
                        <span>jgmiller@domain.com</span>
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
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => (isActive ? 'nav-link active poppins-bold' : 'nav-link')} aria-current="page" to="/" onClick={toggleNavOffcanvas}>Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => (isActive ? 'nav-link active poppins-bold' : 'nav-link')} to="/services" onClick={toggleNavOffcanvas}>Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => (isActive ? 'nav-link active poppins-bold' : 'nav-link')} to="/about" onClick={toggleNavOffcanvas}>About us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => (isActive ? 'nav-link active poppins-bold' : 'nav-link')} to="/contact" onClick={toggleNavOffcanvas}>Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className={({ isActive }) => (isActive ? 'nav-link active poppins-bold' : 'nav-link')} to="/blog" onClick={toggleNavOffcanvas}>Blog</NavLink>
                                    </li>
                                </ul>
                                <Link to="/contact" className="btn btn-primary text-white cta header-cta poppins-medium border-0 rounded-pill" alt="Book a free consultaion link" onClick={toggleNavOffcanvas}>
                                    Book a free consultation
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
