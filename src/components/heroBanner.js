import React, { Component } from 'react';
import HTMLParser from '../helpers/htmlParser';
import PerformanceEnhancer from '../helpers/performanceEnhancer';

class HeroBanner extends Component {
    constructor(props) {
        super(props);
        this.heroBannerRef = React.createRef();
    }

    setHeroBannerExtraSpace = () => {
        let heroBanner = this.heroBannerRef.current;
        let heroBannerDim = heroBanner.getBoundingClientRect();
        let heroBannerContent = this.heroBannerRef.current.querySelector('.banner-content');
        let heroBannerContentDim = heroBannerContent.getBoundingClientRect();

        if (heroBannerContentDim.height > heroBannerDim.height && this.props.setHeroBannerExtraSpace) {
            this.props.setHeroBannerExtraSpace(Math.ceil(heroBannerContentDim.height - heroBannerDim.height));
        } else {
            this.props.setHeroBannerExtraSpace(0);
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
        let bannerDesc = '';
        let bannerClasses = 'row align-items-center position-relative hero-banner';

        if (this.props.description && this.props.description.length > 0) {
            bannerDesc = this.props.description;
        }

        if (this.props.addOnClass && this.props.addOnClass.length > 0) {
            bannerClasses += " " + this.props.addOnClass;
        }

        return (
            <div className={bannerClasses} ref={this.heroBannerRef}>
                <img src={this.props.HeroImage} className="mw-100 p-0" alt="Hero banner" onLoad={this.setHeroBannerExtraSpace} />
                <div className="col mw-1600 mx-auto text-white banner-content">
                    <h1 className="poppins-bold h2 m-0">{HTMLParser.parseHTML(this.props.heading)}</h1>
                    <p className="banner-desc">{HTMLParser.parseHTML(bannerDesc)}</p>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HeroBanner;
