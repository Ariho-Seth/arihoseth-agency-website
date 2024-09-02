
import './Style-Components.css';
import * as yup from "yup";
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import timerIcon from './TIMER.jpeg';

export const Header = () => {
    return (

        <div className="header-Section" >

            <div className="main-title"> Ariho Seth Agency</div>
            <div className="motto"> Scale Your business</div>

        </div>
    )
}

export const HelpUs = () => {
    const [userSuggestion, setUserSuggestion] = useState(null)

    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
            <div className="helpus">
                <p>Every after 7 days, i send an email news letter -ie <span id='concetrate' style={{ color: 'dodgerblue' }}>Concetrate!,</span> This is where i get to share what I've learned throughout the week,
                    what I enjoyed, and what brought me down such that we can learn from every lesson that I've drawn from the experiences
                    {/* At the moment, thois may not sound helpfull, but at a time <b>t,</b> you'll refer to this email or refer a friend to read content from this newsletter
                    because everything here is based on real-world experience and maybe applicable in one's life any time from now */}

                </p>
                <input type='text' placeholder='Your name...' id="message-pane" /><br />
                <input type='text' placeholder='Your e-mail address...' id="message-pane" /> <br />
                <span id='checker'>
                    <input type='checkbox' />
                    &nbsp;I acknowledge the privacy information on the Terms & Conditions Page.

                </span>
                <button>Subscribe</button>
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
                    <p>LinkedIn</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Gmail</p>
                    <p>Twitter</p>
                    <p>+256776826821 | +256701531754</p>

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