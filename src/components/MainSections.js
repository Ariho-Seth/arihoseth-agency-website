
import './Style-Components.css';
import * as yup from "yup";
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"


export const Header= ()=>{
    return(
    <div className="header-Section" style={{backgroundImage:"URL('./media/rotate.JPG')"}}>
            <div className="main-title"> Ariho Seth Agency</div>
            <div className="motto"> Scale Your business</div>
            
        </div>
    )
}



export const StickyHeader=()=>{
    return(
        <div className="sticky-header">
            <div id='sub-title'>Ariho Seth Agency </div>
            
                    
        </div>
    )
  }

const HandleClick= (suggestion)=>{
    
    
    const schema = yup.object().shape({
        userEmail: yup.string().required().email()
            
    })
    
    const {register, handleSubmit} = useForm({
        resolver: yupResolver(schema),
    });
    console.log(suggestion+" is the message")
    const onSubmit=(data)=>{
        console.log("Hiello world")
    }
     if (suggestion !== null) {
        const userSuggestion= suggestion;
        const userEmail= null;
            <div className='emailTracker'>
                    return(
                        <form onSubmit={ handleSubmit(onSubmit) } >
                            <input type='email' ref={userEmail} {...register("userEmail")}/>
                        </form>
                         )
            </div>
        
     } else {
        <p>Please enter suggestion to Submit!</p>
        
     }
    
}


export const HelpUs=()=>{
    const[userSuggestion, setUserSuggestion] = useState(null)
 
    return(
        <div className="helpus">
                <p>Help us improve Our Services</p> 
                <input type='text' placeholder='write your suggestion here...' id="message-pane" value={userSuggestion} onChange={(event)=>{
                  setUserSuggestion ( event.target.value)}}/> <br />
                 <button onClick={ ()=> HandleClick(userSuggestion) }>Submit</button>
        </div>
    )
}

export const Footer =()=>{
    return(
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