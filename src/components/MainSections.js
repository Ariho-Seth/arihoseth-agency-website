
import './Style-Components.css';

import { useRef } from 'react';

import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SlGraph } from "react-icons/sl";
import emailjs from '@emailjs/browser';
import { Link } from 'react-router-dom';






export const Header = () => {
    return (

        <div className="header-Section" >

            <div className="main-title"> Ariho Seth Agency</div>
            <div className="motto"> Scale Your business <SlGraph /></div>

        </div>
    )
}

export const HelpUs = () => {
   


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_5c5c0xl', 'template_o2nn0il', form.current, {
          publicKey: 'rBOnCRNirUZlr9v9k',
        })
        .then(
          () => {
            return(<div style={{fontFamily: "Permanent Marker, cursive", color:"black", fontSize:"15pxnpm"}}><p>Thanks for Subscribing to our newsletter</p></div>
                
            )
            
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };





    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <div className="helpus">
                <p>Every after 7 days, I send an email news letter -ie <span id='concetrate' style={{ color: 'dodgerblue' }}>Concetrate!,</span> This is where I get to share what I've learned throughout the week,
                    what I enjoyed, and what brought me down such that we can learn from every lesson that I've drawn from the experiences
                    {/* At the moment, thois may not sound helpfull, but at a time <b>t,</b> you'll refer to this email or refer a friend to read content from this newsletter
                    because everything here is based on real-world experience and maybe applicable in one's life any time from now */}

                </p>
                                 <form ref={form} onSubmit={sendEmail}>
                                      
                                        <input type="text" name="user_name" placeholder='Your name...' id='input'/><br />
                                        <input type="email" name="user_email"  placeholder='Your Email...' id='input'/> <br />
                                        <input type="submit" value="Subscribe" id='button'/>
                                </form>




            </div>
        </div>
    )
}

export const Footer = () => {
  
    return (
        <div className="footer-Section">

            <div className='first-footer'>
                <div className="left-side">
                    <p>Our News Lettter</p>
                    <p>Talk to Me!</p>
                    <p>Terms & Conditions</p>
                    <p>Visit Offices</p>
                    <h2>Talk to us today!</h2>
                </div>

                <div className="right-side">
                   <Link to="http://linkedin.com/in/atwijukire-ariho-seth-4a7a38259" target='blank' >    <p> <FaLinkedin /> &nbsp;LinkedIn</p> </Link>
                   <Link to="https://www.instagram.com/ariho_seth?igsh=eWVxM3gxazY4Nnk5&utm_source=qr" target='blank' >   <p> <FaInstagramSquare /> &nbsp; Instagram</p></Link>
                   <Link to="https://www.facebook.com/rodriguez.costa.56?mibextid=LQQJ4d" target='blank' >   <p>< FaFacebook /> &nbsp; Facebook</p></Link>
                   <Link to="/" target='blank' >  <p> <IoIosMail /> &nbsp; Gmail</p></Link>
                   <Link to="https://x.com/ariho_seth18?s=21" target='blank'>   <p> < FaXTwitter/> &nbsp; Twitter</p></Link>
                    <p>  <BsFillTelephoneFill /> &nbsp; +256776826821 | +256701531754</p>

                </div>

            </div>

            <div className="middle-side">
                <p>&copy; ArihoSethAgency 2024</p>
                <p>Kampala-Uganda</p>
                <span id="bottom-span">All Rights Reserved</span>
            </div>
            <div className="bottomLinks">
                <Link to="/"> Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Services">Services</Link>
                <Link to="/TalkBusiness">Talk Business</Link>
            </div>

        </div>
    )
}