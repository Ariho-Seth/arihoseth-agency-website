
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { Footer, HelpUs } from '../components/MainSections';
import '../components/Style-Business.css';
import { Link } from 'react-router-dom';

export const TalkBusiness = () => {
    return (
        <div className="mainBusiness">

            <BusinessContent />
            <HelpUs />
            <Footer />

        </div>
    )
}

const BusinessContent = () => {

    

     
    





    return (
        <div className="businessSection">
            <div className="newsletterSection" >

                <h2>News Letter</h2>


                <p>Every after 7 days, I send an email news letter -ie <span id='concetrate' style={{ color: 'dodgerblue', fontWeight: "bold" }}>Concetrate!,</span> This is where I get to share what I've learned throughout the week,
                    what I enjoyed, and what brought me down. Such that we can learn from every lesson that I've drawn from the experiences.</p>
                <p>At the moment, this may not sound helpful, but at a time <b>t,</b> you'll refer to this email or refer a friend to read content from this newsletter
                    because everything here is based on real-world experience and maybe applicable in one's life any time from now.
                </p>
                <button>Subscribe Now</button>

            </div>
            <div className="contentCreation">
                <h2>Content Creation</h2>
                <p>Content tells the story of your organization. Also called story telling. We create content for organizations that is perfectly suited for use on social media<br />
                    Our Extensive analysis capabilities allow us to use this content in the best possible way  and at the best possible time. This ensures that there is a lot of interaction and
                    involvement for your product
                </p>
                <Link to="/RequestService"> <button >Request Service</button> </Link>

            </div>
            <div className="leadGenerator">
                <h2>Lead Generation</h2>
                <p> Social Media Management can directly contribute to lead generation and sales by capturing the intrests of potential
                    clients and guiding them through the purchase journey</p>
               <Link to="/RequestService"> <button >Request Service</button> </Link>
            </div>


        </div>
    )
}

const ServiceForm=()=>{

   
}



