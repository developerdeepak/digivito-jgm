import { Outlet } from "react-router-dom";
import Components from "../components";

const Layout = () => {
    return (
        <>
            <Components.PageHeader />
            <Outlet />
            <Components.PageFooter>
                <Components.PopUp id="bookAppointmentPopup" heading="Book Appointment">
                    <iframe src="https://zcal.co/i/NRlqhD8T?embed=1&embedType=iframe" title="book an appointment" loading="lazy" style={{ border: 'none', minWidth: '320px', minHeight: '544px', height: '100%', width: '100%' }} id="zcal-invite"></iframe>
                </Components.PopUp>
            </Components.PageFooter>
        </>
    )
};

export default Layout;