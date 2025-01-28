import AppData from '../data/data.json';
import logoWhite from '../images/logo-white.svg';
import FooterNavGroup from './footerNavGroup';

const PageFooter = () => {
    const NavItemsHTML = [];

    AppData.footer.navigation.forEach((item, index) => {
        NavItemsHTML.push(<FooterNavGroup {...item} key={index} />);
    });
    return (
        <footer className="App-footer fixed-bottom text-white">
            <div className="row navigation-row bg-secondary">
                <div className="col mx-auto">
                    <div className="logo-container text-center border-bottom border-white d-none d-lg-block">
                        <img src={logoWhite} className="footer-logo" alt="J.G.Miller header logo" />
                    </div>
                    <div className="footer-nav-container d-flex flex-column flex-lg-row">
                        <div className="footer-nav-group">
                            <p className="column-heading fs-4">{AppData.footer.estatePlanning.heading}</p>
                        </div>
                        {NavItemsHTML}
                        <div className="footer-nav-group">
                            <p className="column-heading fs-4">{AppData.footer.contact.heading}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row copyright-row bg-dark">
                <div className="col mx-auto">
                    <p className="text-center my-0 copyright-text">{AppData.footer.copyrightText1} <nobr>{AppData.footer.copyrightText2}</nobr></p>
                </div>
            </div>
        </footer>
    );
};

export default PageFooter;
