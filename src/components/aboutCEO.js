import ceoRoundImage from '../images/ceo-round.png';

const AboutCEO = () => {
    return (
        <div className="row about-ceo-comp">
            <div className="col mw-1600 mx-auto">
                <div className="row content-container">
                    <div className="col-12 col-xl-5 d-flex align-items-center justify-content-center">
                        <div className="titles-container">
                            <h4 className="text-primary h4 mb-0 poppins-bold">
                                About Us
                            </h4>
                            <h2 className="h2 mb-0 poppins-bold">Legal Expertise with a Personal Touch</h2>
                        </div>
                    </div>
                    <div className="col-12 col-xl-7">
                        <div className="about-ceo-content position-relative bg-dark">
                            <img src={ceoRoundImage} className="position-absolute" alt="CEO Image" />
                            <h2 className="h2 mb-0 poppins-bold text-primary">Jonathan Miller</h2>
                            <div class="text-white description">
                                <p>Hi, I’m Jon, the founding attorney here at J G Miller Law, where I’ve combined over a decade of legal experience with a passion for helping families and businesses succeed. I’ve been proudly licensed in Utah since 2013 and recently joined the Arizona bar in 2024, so whether you’re in the mountains of Utah or the deserts of Arizona, I’m here to guide you through the legal process—virtually or in person!</p>
                                <br />
                                <p>As a father of 4 and the owner of an English Cream Golden Retriever, my days (and nights) are full of fun and excitement. More importantly, I know how important it is to protect what matters most. When I’m not helping clients with estate plans or business strategies, you’ll likely find me cracking dad jokes or spending quality time with my family in the mountains.</p>
                                <br />
                                <p>I’m a big believer that legal services don’t have to be intimidating. I’m here to make the process as smooth and accessible as possible, whether we’re meeting online or in person. My goal is to help you feel confident about your future—while maybe sneaking in a joke or two along the way.</p>
                                <br />
                                <p>So, if you’re ready to plan for your family’s future or take your business to the next level, let’s chat! I promise, I’ll keep the legal jargon to a minimum (but no guarantees on the dad jokes).</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutCEO;
