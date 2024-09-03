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
        <div className="why-socialMedia" style={{backgroundImage:"URL('./media/laptop.jpeg')"}}>
            <h2>Why social Media Marketing?</h2>
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
    )
}