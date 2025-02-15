const ImageBanner = ({ containerSelector, images, altText }) => {
    const defaultImg = images.default;
    const mobileImg = images.mobile || defaultImg;
    const tabletImg = images.tablet || mobileImg;
    const desktopImg = images.desktop || tabletImg;

    return (
        <div className={"row image-banner " + containerSelector}>
            <div className="col mw-1600 mx-auto text-center">
                <picture>
                    <source media="(min-width:1024px)" srcSet={desktopImg} />
                    <source media="(min-width:767px)" srcSet={tabletImg} />
                    <img src={mobileImg} alt={altText} className="mw-100" />
                </picture>
            </div>
        </div>
    );
};

export default ImageBanner;
