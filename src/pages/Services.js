import { Footer, HelpUs } from "../components/MainSections"
import '../components/Style-Services.css';
import '../App.css';

export const Services = () => {
    return (
        <div className="main-Services">

            <ServiceContent />
            <HelpUs />
            <Footer />

        </div>

    )
}

const ServiceContent = () => {

    return (
        <div className="why-socialMedia" >
            <h2>Why social Media Marketing?</h2>
            <div className="why-socialMedia2" >
                <div className="socialOverlay"></div>
                    
                <div className="brandAware" >
                        <h3>Brand Awareness</h3>
                        <p>Creating brand awareness increases market share and shortens the sales process which positions a brand
                            as a leader in its sector
                            By establishing a strong presence on popular social media platforms, businesses can reach a wider audience and
                            introduce their brand to potential clients.</p>
                </div>

                <div className="webTraffic" >
                        <h3>Drive Website Traffic</h3>
            
                        <p>We serve as valuable channels for driving traffic to your website or landing pages. By optimizing your socialmedia
                            platforms with clear call to action and compelling descriptions.
                            By running targeted ad campagainsto promote specific products and servises to your audience
                        </p>
                </div>
                <div className="leadGen" >
                        <h3>Generate Leads and Sales</h3>
                        <p> Social Media Management can directly contribbute to lead generation and sales by capturing the intrests of potential
                            clients and guiding them through the purchace journey</p>
                 </div>
            </div>

            <div className="mycontentCreation">
                <div className="contentOverlay"></div>
                <h2>Content creation</h2>
                <p>Content tells the story of your organisation. Also called storytelling. We create content for organisations that are perfectly suited for use on social media.
                    Our extensive analysis capabilities allow us to use this content in the best way possible and at the best possible time.<br />
                    This ensures that there is a lot of interaction and involvemrnt for your product or service. We also work with a monthy content calender for your organisation
                    This calender is based on extensive analysis so we can take control of your organisation when communicatng content on social media.    
                </p>
            </div>
                <div className="runningAds">
                    <div className="googleAds">
                        <h2>Google Ads</h2>
                       <p> Advertising is the heart of Marketing and business growth, As an Agency, we set you a platform to showcase your products and services on an extended
                        area. We help you run adds on all google platforms like Youtube. Thus setting your products or services to potential leads that may help you generation sales<br />
                        Running Ads can be done depending on the clients needs, target audience, and time of action.
                        </p>
                    </div>
                    <div className="facebookAds">
                        <h2>Meta Ads</h2>
                        <p>
                            One other to help you, your business or company generate potential leads is by running Ads across the Meta environment
                            We help you get in touch with new client by running Ads across all meta platforms like Facebook and Instagram. Thus Providing
                            you an opportunity talk to potential customers helping you increase your sales 
                        </p>
                    </div>

            </div>
            <div className="website-design">
                <h2>Website-design</h2>
                      <p>  Websites are powerful tools to businesses as far as marketing is concerned, they help you showcase your products and services to a wider
                        platform, thus setting you a chance to interact with your clients and increasing your sales.<br />
                        We help you build a commercial website that will ease the work of advertising and talking to clients, marketing and strategizing for for 
                        target audience.
                        </p>
            </div>
            <div className="accountManagement">
                <div className="accountOverlay"></div>
                <h2>Social Media Account Management</h2>
                <p>
                    We help you create, grow, track, and manage your social media handles ie Tiktok, Instagram, LinkedIn, Facebook ..., by undersatnding the anallytics 
                    and increasing your target audience over a reasonable amount of time.

                </p>
            </div>
           
        </div>
    )
}

