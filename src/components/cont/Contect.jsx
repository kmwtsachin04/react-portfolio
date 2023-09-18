import React from 'react'
import './Contect.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_32cpj6u', 'template_r07vzsk', form.current, 'r4Qmxozz-tc04kvzC')

    e.target.reset()
  };
  return (
    <section id='contact'>
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
             <MdOutlineEmail className='contact_option-icon'/>
             <h4>Email</h4>
             <h5>sachin09688@gmail.com</h5>
             <a href="mailto:sachin09688@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
             <RiMessengerLine className='contact_option-icon'/>
             <h4>Messenger</h4>
             <h5>Sachin Kumawat</h5>
             <a href="https://m.me/sachin.kumawat.737448" target="_blank">Send a message</a>
          </article>
          <article className="contact_option">
             <BsWhatsapp className='contact_option-icon'/>
             <h4>WhatsApp</h4>
             <h5>+91 9783838284</h5>
             <a href="https://api.whatsapp.com/send?phone=+919783838284&text=Hello Sachin" target="_blank">Send a message</a>
          </article>
        </div>
        {/* End of Contact Form */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name='name' placeholder='Your Full Name'  required/>
          <input type="email" name='email' placeholder='Your mail' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
       </div>
    </section>
  )
}

export default Contact