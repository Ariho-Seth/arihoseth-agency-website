
import './Style-Components.css';

import { useRef, useState } from 'react';

import { FaInstagramSquare, FaFacebook, FaLinkedin } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { SlGraph } from "react-icons/sl";

import emailjs from '@emailjs/browser';






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
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };





    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <div className="helpus">
                <p>Every after 7 days, i send an email news letter -ie <span id='concetrate' style={{ color: 'dodgerblue' }}>Concetrate!,</span> This is where i get to share what I've learned throughout the week,
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
                    <p>Administrators</p>
                    <p>Visit Offices</p>
                </div>

                <div className="right-side">
                    <p> <FaLinkedin /> &nbsp;LinkedIn</p>
                    <p> <FaInstagramSquare /> &nbsp; Instagram</p>
                    <p>< FaFacebook /> &nbsp; Facebook</p>
                    <p> <IoIosMail /> &nbsp; Gmail</p>
                    <p> < FaXTwitter/> &nbsp; Twitter</p>
                    <p>  <BsFillTelephoneFill /> &nbsp; +256776826821 | +256701531754</p>

                </div>

            </div>

            <div className="middle-side">
                <p>&copy; ArihoSethAgency 2024</p>
                <p>Kampala-Uganda</p>
                <span id="bottom-span">All Rights Reserved</span>
            </div>

        </div>
    )
}