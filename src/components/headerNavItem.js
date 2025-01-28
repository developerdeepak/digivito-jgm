import { NavLink } from "react-router-dom";

const HeaderNavItem = (props) => {
    return (
        <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'nav-link active poppins-bold' : 'nav-link')} to={props.route} onClick={props.onClick}>{props.name}</NavLink>
        </li>
    );
};

export default HeaderNavItem;
