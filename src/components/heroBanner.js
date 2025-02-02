import React, { Component } from 'react';
import { Link } from "react-router-dom";
import HTMLParser from '../helpers/htmlParser';
import PerformanceEnhancer from '../helpers/performanceEnhancer';

class HeroBanner extends Component {
    constructor(props) {
        super(props);
        this.heroBannerRef = React.createRef();
    }

    setHeroBannerExtraSpace = () => {
        if (this.props.setHeroBannerExtraSpace) {
            let heroBanner = this.heroBannerRef.current;
            let heroBannerContent = this.heroBannerRef.current.querySelector('.banner-content');
            let heroBannerDim = '';

            if (heroBanner) {
                heroBannerDim = heroBanner.getBoundingClientRect();
            }

            if (heroBannerContent) {
                let heroBannerContentDim = heroBannerContent.getBoundingClientRect();

                if (heroBannerContentDim.height > heroBannerDim.height) {
                    this.props.setHeroBannerExtraSpace(Math.ceil(heroBannerContentDim.height - heroBannerDim.height));
                } else {
                    this.props.setHeroBannerExtraSpace(0);
                }
            } else {
                this.props.setHeroBannerExtraSpace(0);
            }
        }
    }

    componentDidMount() {
        this.setHeroBannerExtraSpace();
        window.addEventListener('resize', PerformanceEnhancer.debounce(this.setHeroBannerExtraSpace, 200));
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setHeroBannerExtraSpace);
    }

    render() {
        let bannerHeading = '';
        let bannerDesc = '';
        let bannerCTA = '';
        let bannerClasses = 'row align-items-center position-relative hero-banner';

        if (this.props.heading && this.props.heading.length > 0) {
            bannerHeading = HTMLParser.parseHTML(this.props.heading);
        }

        if (this.props.description && this.props.description.length > 0) {
            bannerDesc = HTMLParser.parseHTML(this.props.description);
        }

        if (this.props.addOnClass && this.props.addOnClass.length > 0) {
            bannerClasses += " " + this.props.addOnClass;
        }

        if (this.props.cta) {
            bannerCTA = (
                <Link to={this.props.cta.link} className="btn btn-primary text-white cta poppins-medium border-0 rounded-pill" alt="Book a free consultaion link">
                    {this.props.cta.text}
                </Link>
            );
        }

        return (
            <div className={bannerClasses} ref={this.heroBannerRef}>
                <img src={this.props.HeroImage} className="mw-100 p-0" alt="Hero banner" onLoad={this.setHeroBannerExtraSpace} />
                <div className="col mw-1600 mx-auto text-white banner-content">
                    <h1 className="poppins-bold h2 m-0 banner-heading">{bannerHeading}</h1>
                    <p className="banner-desc">{bannerDesc}</p>
                    {bannerCTA}
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HeroBanner;
