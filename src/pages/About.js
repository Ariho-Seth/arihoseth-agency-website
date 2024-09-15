
import '../components/Style-About.css';
import { Footer, HelpUs } from "../components/MainSections";
import { Link } from "react-router-dom";


export const About = () => {
    return (
        <div className="main-About">





            <AboutContent />
            <div style={{ backgroundColor: "black", width: "100%", height: "5px" }}></div>
            <HelpUs />
            <Footer />

        </div>

    )
}

const AboutContent = () => {
    return (
        <div className="historyPage">

            <div className="ourHistory">
            <div className="startHistory">
                <div className="historyOverlay"></div>
            <p> <span style={{ color: "dodgerblue", fontWeight: "bold" }}>  Ariho Seth Agency,</span> founded in 2024, is a renowed and wide speciallised agency that deals with new and social media on a daily basis.
                Over 2 billion people worldwide use social media .<br /></p>
            </div>
               <p> We would like to bring you in touch with you in touch with your target group thru social media. <br /></p>
            <p> social Media is often the most impostant channel in a Marketing niche nowadays. Interaction is always the most important thing for us. Therefore, it is important for organisations
                and bussineses to effectively target their specific and particular audience. <br /></p>
            <p> As an agency, we aim at having our customers create, through new and social media, the optimuim support for thir organisation.
                Doing this in sight of their mission and vision point. We achive this from our own experience.</p>


            </div>
              
                <div className="takeMe">
              
                <div className="nextStepSection">
                  
                    <h2>We offer a batch of services which include</h2>
                   
                        <ul>
                            <li>Lead generation</li>
                            <li>Content Creation</li>
                            <li>Social Media Account Management</li>
                            <li>Running Ads</li>
                            <li>Brand Awareness</li>                       
                        </ul> 
                    <p>For these and more about our Services, Visit our <Link to="/Services">Services </Link>page</p>

                   
                    </div>
                </div>
        </div>
        
    )
}