import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AppData from '../data/data.json';
import HTMLParser from '../helpers/htmlParser';
import Icons from "../images/icons";

const GetFooterLink = (props) => {
    if (props.link.includes('#')) {
        return (
            <HashLink to={props.link} className="nav-link text-white p-0">{props.name}</HashLink>
        );
    } else {
        return (
            <Link to={props.link} className="nav-link text-white p-0">{props.name}</Link>
        );
    }
}

const FooterNavGroupItem = (props) => {
    let itemIcon = '';
    if (props.icon) {
        itemIcon = <img src={Icons[props.icon]} alt={props.icon + ' icon'} />
    }

    if (props.link) {
        return (
            <li className="nav-item d-flex align-items-start">
                {itemIcon}
                <GetFooterLink {...props} />
            </li>
        );
    }

    if (props.openPopup) {
        return (
            <li className="nav-item d-flex align-items-start">
                {itemIcon}
                <button className="nav-link text-white text-start p-0" data-bs-toggle="modal" data-bs-target={'#' + props.targetPopup}>{props.name}</button>
            </li>
        );
    }

    return (
        <li className="nav-item d-flex align-items-start text-white">
            {itemIcon}
            <p className="m-0">{HTMLParser.parseHTML(props.name)}</p>
        </li>
    );
};

const FooterSocialLinks = (props) => {
    let socialLinks = [];
    props.social.forEach((socialItem, index) => {
        if (socialItem.icon && socialItem.icon.length > 0) {
            let socialItemImage = <img src={Icons[socialItem.icon]} className="social-icon" alt={socialItem.name} />
            if (socialItem.link) {
                socialLinks.push(<a href={socialItem.link} className="nav-link text-white p-0" key={index}>{socialItemImage}</a>);
            } else {
                socialLinks.push(socialItemImage);
            }
        }
    });
    return socialLinks;
}

const FooterNavGroup = (props) => {
    const NavGroupItemsHTML = [];
    let navGroupLiCount = 0;

    if (props.items && props.items.length > 0) {
        props.items.forEach((item, index) => {
            navGroupLiCount = index;
            NavGroupItemsHTML.push(<FooterNavGroupItem {...item} key={navGroupLiCount} />);
        });
    }

    if (props.social && props.social.length > 0) {
        NavGroupItemsHTML.push(
            <li className="nav-item d-flex align-items-center" key={navGroupLiCount + 1}>
                <FooterSocialLinks {...props} />
            </li>
        );
    }
    return (
        <div className="col footer-nav-group">
            <p className="group-heading fs-4">{props.heading}</p>
            <ul className="nav flex-column">
                {NavGroupItemsHTML}
            </ul>
        </div>
    );
}

const PageFooter = (props) => {
    const NavItemsHTML = [];

    AppData.footer.navigation.forEach((item, index) => {
        NavItemsHTML.push(<FooterNavGroup {...item} key={index} />);
    });
    return (
        <footer className="App-footer text-white">
            <div className="row navigation-row bg-secondary">
                <div className="col mx-auto mw-1600">
                    <div className="logo-container text-center border-bottom border-white d-none d-lg-block">
                        <img src={Icons.LogoWhite} className="footer-logo" alt="J.G.Miller header logo" />
                    </div>
                    <div className="footer-nav-container">
                        <div className="row flex-column flex-lg-row">
                            {NavItemsHTML}
                        </div>
                    </div>
                </div>
            </div>
            <div className="row copyright-row bg-dark">
                <div className="col mx-auto mw-1600 d-flex flex-column flex-lg-row justify-content-between">
                    <p className="text-center text-lg-end my-0 copyright-text">
                        {HTMLParser.parseHTML(AppData.footer.disclaimer)}
                    </p>
                    <p className="text-center text-lg-end my-0 copyright-text">
                        {HTMLParser.parseHTML(AppData.footer.copyrightText)}
                    </p>
                </div>
            </div>
            {props.children}
        </footer>
    );
};

export default PageFooter;
