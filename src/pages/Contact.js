import React from 'react'
import './Contact.css'


function Contact() {
  return (
    <>
    <h1 class name='contact'>Contacto</h1>
    <div className="row">
        <div className="contactInfo">
        <div class='social-icons'>
            <a href='https://www.facebook.com/profile.php?id=100064217254366'
             class='social-icon-link facebook'
             target="_blank" 
             rel="noopener noreferrer"
             aria-label='Facebook'>
        <i class='fab fa-facebook-f'>Química Durango</i>
            </a>
            <a href="https://wa.me/526183330007"
                  class='social-icon-link whatsapp'
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label='Facebook'>
                  <i class="fa fa-whatsapp" aria-hidden="true">Whatsapp</i>
            </a>
            <a href="https://wa.me/526183330007"
                  class='social-icon-link whatsapp'
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label='Facebook'>
                  <i class="fa fa-phone" aria-hidden="true">Cel: 618-333-0007</i>
            </a>
            ó
            <a href="https://wa.me/526182910347"
                  class='social-icon-link whatsapp'
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label='Facebook'>
                  <i class="fa fa-phone" aria-hidden="true">Cel: 618-291-0347</i>
            </a>
            <i style= {{ color: "white" }} class="material-icons">add_location</i>
            <a 
                href="https://www.google.com/maps/place/C.+Negrete+418,+Zona+Centro,+34000+Durango,+Dgo.,+M%C3%A9xico/@24.0284565,-104.6576533,3a,75y,199.39h,83.8t/data=!3m6!1e1!3m4!1sIKw4Pux7JZqx0uii6kgJ1g!2e0!7i16384!8i8192!4m5!3m4!1s0x869bb7df75b878d9:0xf0e96569c5aae6dd!8m2!3d24.0283411!4d-104.6575865"
                class='social-icon-link whatsapp'
                target="_blank" 
                rel="noopener noreferrer"
                aria-label='Facebook'>
                <i class="material-icons" aria-hidden="true"></i>Negrete 418 ote, zona centro. Durango, Durango.
            </a>
            
            
            <i class="fa fa-phone"
             aria-label='Facebook'>618-333-0007</i>
            </div>
        </div>
        <div className="contactForm">
                <label>Nombre:
                    <input className='contactBoxes' type="text" name="" id="" placeholder='Name' />
                </label>
                <label>Email:
                    <input className='contactBoxes' type="text" name="" id="" placeholder='Email'/>
                </label>
                <label>Descripción:
                    <input className='contactBox' type="text" placeholder='Descripción del producto' />
                </label>
                <input className='submitButton' type="submit" />
        </div>
    </div>
    </>
  )
}

export default Contact;