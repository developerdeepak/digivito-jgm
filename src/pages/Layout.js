import { Outlet } from "react-router-dom";
import PageHeader from "../components/pageHeader";

const Layout = () => {
    return (
        <>
            <PageHeader />
            <Outlet />
        </>
    )
};

export default Layout;