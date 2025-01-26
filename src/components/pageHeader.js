import phoneIcon from '../images/icons/phone.svg';
import mailIcon from '../images/icons/mail.svg';
import logo from '../images/logo.svg';

function PageHeader() {
    return (
        <header className="App-header">
            <div className="row contact-row">
                <div className="col d-flex justify-content-center justify-content-lg-end align-items-center">
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
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/home">
                            <img src={logo} className="app-logo" alt="J.G.Miller Logo" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main-nav-toggle" aria-controls="main-nav-toggle" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse ms-auto" id="main-nav-toggle">
                            <ul class="navbar-nav mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Link</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                            <a href="#contact-us" className="btn btn-sm btn-primary">Book a free consultation</a>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default PageHeader;