// css import
import './contact.css';

// react functionalities import 
import { forwardRef } from 'react';
import emailjs from 'emailjs-com';

// pages import


// components import


// hooks import


// icons import
import linkedinIcon from '../../assets/images/icons/linkedin.png';
import githubIcon from '../../assets/images/icons/github.png';
import xIcon from '../../assets/images/icons/x.png';


const Contact = forwardRef((props, ref) => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_vrxj4ln',
      'template_0t5gx0u',
      e.target,
      'NfS64zmNNh5Q3BWnw',
    ).then(
      (result) => {
        console.log('Email sent successfully!',result);
      },
      (error) => {
        console.error('Error:', error.text);
      }
    );

    e.target.reset();
  };

  return (
    <div ref={ref} className='contact-section-outer'>
      <h3>Let's connect!</h3>
      <div className='contact-content'>
        <div className='contact-content-top'>
          <h5>Send <br/> an <br/> email!</h5>
          <form onSubmit={sendEmail}>
            <input name="name" type="text" placeholder='Your name' ></input>
            <input name="email" type="text" placeholder='Your email' ></input>
            <textarea name="message" placeholder='Your message'></textarea>
            <button>Send</button>
          </form>
        </div>
        <div className='contact-content-bottom'>
          <div className='contact-point'>
            <h4>LinkedIn</h4>
            <img src={linkedinIcon} />
          </div>
          <div className='contact-point'>
            <h4>X (Twitter)</h4>
            <img src={xIcon} />
          </div>
          <div className='contact-point'>
            <h4>GitHub</h4>
            <img src={githubIcon} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Contact;
