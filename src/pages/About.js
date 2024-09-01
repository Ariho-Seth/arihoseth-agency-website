import { Header, StickyHeader, Footer, HelpUs } from "../components/MainSections";
import { BlogSection } from "./Home";
import '../components/Style-About.css';

export const About= ()=>{
    return(
            <div className="main-About">
                <Header />
                <StickyHeader>
                     <h2>This is the About page</h2>
                </StickyHeader>
               

                <AboutContent />
               <div style={{backgroundColor:"black", width:"100%", height:"5px"}}></div>
                <HelpUs />
                <Footer />
       
            </div>
        
    )
}

const AboutContent=()=>{
    return(
        <div className="ourHistory">
          <p> <span style={{color:"dodgerblue", fontWeight:"bold"}}>  Ariho Seth Agency,</span> founded in 2024, is a renowed and wide speciallised agency that deals with new and social media on a daily basis.
            Over 2 billion people worldwide use social media .<br /> 
            We would like to bring you in touch with you in touch with your target group thru social media. <br /></p>
           <p> social Media is often the most impostant channel in a Marketing niche nowadays. Interaction is always the most important thing for us. Therefore, it is important for organisations
            and bussineses to effectively target their specific and particular audience. <br /></p>
           <p> As an agency, we aim at having our customers create, through new and social media, the optimuim support for thir organisation.
            Doing this in sight of their mission and vision point. We achive this from our own experience.</p>
        </div>
    )
}