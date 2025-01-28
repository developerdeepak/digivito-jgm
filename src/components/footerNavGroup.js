import { Link } from "react-router-dom";

const FooterNavGroupItem = (props) => {
    if (props.route) {
        return (
            <li className="nav-item">
                <Link to={props.route} className="nav-link text-white px-0">{props.name}</Link>
            </li>
        );
    } else {
        return (
            <li className="nav-item text-white py-2">
                {props.name}
            </li>
        );
    }
};


const FooterNavGroup = (props) => {
    const NavGroupItemsHTML = [];

    if (props.items && props.items.length > 0) {
        props.items.forEach((item, index) => {
            NavGroupItemsHTML.push(<FooterNavGroupItem {...item} key={index} />);
        });
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
