import React from 'react'
import './Contact.css'


function Contact() {
  return (
    <>
    <h1 class name='contact'>Contacto</h1>
    <div className="row">
        <div className="contactInfo">
        <label>HolaHolaHolaHolaHolaHolaHolaHolaHolaHola</label>
            <a href="https://wa.me/526183330007"
                  class='social-icon-link whatsapp'
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label='Facebook'>
                  <i class="fa fa-whatsapp" aria-hidden="true">Whatsapp</i>
            </a>
        </div>
        <div className="contactForm">
                <label>Name
                    <input type="text" name="" id="" placeholder='Name' />
                </label>
                <label>Email
                    <input type="text" name="" id="" placeholder='Email'/>
                </label>
                <label>Description
                    <input type="text" />
                </label>
                <input type="submit" />
        </div>
    </div>
    </>
  )
}

export default Contact;