import { Link } from "react-router-dom";
import Helpers from "../helpers";
import Icons from "../images/icons";

const FooterNavGroupItem = (props) => {
    let itemIcon = '';
    if (props.icon) {
        itemIcon = <img src={Icons[props.icon]} alt={props.name} />
    }

    if (props.route) {
        return (
            <li className="nav-item d-flex align-items-start">
                {itemIcon}
                <Link to={props.route} className="nav-link text-white p-0">{props.name}</Link>
            </li>
        );
    } else {
        return (
            <li className="nav-item d-flex align-items-start text-white">
                {itemIcon}
                <p className="m-0">{Helpers.HTMLParser.parseHTML(props.name)}</p>
            </li>
        );
    }
};

const FooterSocialLinks = (props) => {
    let socialLinks = [];
    props.social.forEach((socialItem, index) => {
        if(socialItem.icon && socialItem.icon.length > 0) {
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

    if (props.items && props.items.length > 0) {
        props.items.forEach((item, index) => {
            NavGroupItemsHTML.push(<FooterNavGroupItem {...item} key={index} />);
        });
    }

    if (props.social && props.social.length > 0) {
        NavGroupItemsHTML.push(
            <li className="nav-item d-flex align-items-center">
                <FooterSocialLinks {...props} />
            </li>
        );
    }
    return (
        <div className="footer-nav-group">
            <p className="group-heading fs-4">{props.heading}</p>
            <ul className="nav flex-column">
                {NavGroupItemsHTML}
            </ul>
        </div>
    );
}

export default FooterNavGroup;
