import { Outlet } from "react-router-dom";
import Components from "../components";

const Layout = () => {
    return (
        <>
            <Components.PageHeader />
            <Outlet />
            <Components.PageFooter />
        </>
    )
};

export default Layout;