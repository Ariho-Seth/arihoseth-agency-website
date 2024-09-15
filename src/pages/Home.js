
import '../App.css';
import '../components/Style-Components.css';
import '../components/Style-Home.css';
import { Footer, HelpUs } from "../components/MainSections"






export const Home = () => {
    return (
        <div className="home-class">
            <Content />
            <HelpUs />
            <Footer />
        </div>
    )
}

// Content Section Starts Here!!
const Content = () => {
    return(
        <div className="content-Section">

            <div className="first-Content">
                    <p>we are a <br />
                        <span style={{fontWeight:"bold"}}>Social Media Marketing Agency</span>                    
                    </p>
            </div>

            <div className="work">
                <div className="our-work" >
                    {/* <div className="overlay2"></div> */}
                    <h2>What we do?</h2>
                    <p> <b>Ariho Seth Agency</b> is a company that helps businesses, organisations and individuals to leverage
                        social media platforms to achieve their Marketing and business goals <br />
                        we offer different Sevices that are aimed at growing your Business and elevating it to an unbelivable level
                        We provide a wide range of services such as creating and managing social media accounts,
                        content creation, running ad campagains etc...
                    </p>

                </div>


                <div className="moreSection">
                    <div className="moreofUs" style={{display:"flex", flexDirection:"column"}}>
                            {/* <div className="overlay"></div> */}
                            <div className='firstMore'>
                            <h2>Want More?</h2>
                            <p>We provide services to help businesses, organisations and individuals promote their products,
                                services or brand on social media platforms.<br />
                                Assist companies in planing and implementing successful social media campagains.
                            </p>
                    </div>
                    <div className='secondMore' >
                        <p >
                            Social Media is often the most important channel in a Marketing niche nowadays. Interaction is always the most important thing for us.<br />
                            Therefore, it is important for organisations and bussineses to effectively target their specific and particular audience.
                        </p>
                    </div>
                    
                     </div>

                     <div className="whyAriho2">
                    <h2>Why Choose us?</h2>
                    <p><b>Ariho Seth Agency </b> is a specialised Agency that is aimed at particular tasks in
                        the sector thus increasing expertise in such a field.<br />
                        Over 2 billion people worldwide use social media so
                        We bring you close and in contact to your potential leads through social media.
                    </p>
                </div>
            </div>
            <div className='lastSection'>
                <p>
                We create content for organisations that is perfectly suited for use on social media. 
                Our extensive analysis capabilities allow us to use this content in the best way possible and at the best possible time.
                This ensures that there is a lot of interaction and involvement for your product or service.<br /> We also work with a monthy 
                content calender for your organisation. This calender is based on extensive analysis 
                so we can take control of your organisation when communicatng content on social media.
                </p>
            </div>
           


        </div>
    </div>
    )}
