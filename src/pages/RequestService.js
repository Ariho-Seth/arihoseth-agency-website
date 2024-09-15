import { useRef } from "react";
import emailjs from '@emailjs/browser';
import '../components/Style-RequestServices.css';
import { Footer } from "../components/MainSections";

export const RequestService=()=>{
    const form = useRef();

    const serviceRequest = (e) => {
    
    
    
        e.preventDefault();
      
        emailjs.sendForm('service_5c5c0xl', 'template_o2nn0il', form.current, {
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
  



    return(
        <div className="myservice">
                <h2>Welcome to the Request Service page</h2>
    
        <div className='requestService'>
           <div className="request-overlay"></div>
            <form ref={form} onSubmit={serviceRequest}>
                         <input type="text" name="message"  placeholder='type your message here...' id='input'/> <br />
                        <input type="text" name="user_name" placeholder='Your name...' /><br />
                        <input type="email" name="user_email"  placeholder='Your Email...'/> <br />
                        
                        <input type="submit" value="Subscribe" id='button'/>

            </form>
        </div>

        </div>
    )
}

<Footer />