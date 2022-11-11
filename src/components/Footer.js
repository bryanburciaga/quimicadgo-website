import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
           <Link to='/about'><h2>Nosotros</h2></Link>
          </div>
          <div class='footer-link-items'>
          <Link to='/catalogo'><h2>Catálogo</h2></Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
          <Link to='/Contacto'><h2>Contact</h2></Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Química Durango
            </Link>
          </div>
          <small class='website-rights'>Química Durango © 2022</small>
          <div class='social-icons'>
            <a href='https://www.facebook.com/profile.php?id=100064217254366'
             class='social-icon-link facebook'
             target="_blank" 
             rel="noopener noreferrer"
             aria-label='Facebook'>
        <i class='fab fa-facebook-f' />
            </a>
                  <a href="https://wa.me/526183330007"
                  class='social-icon-link whatsapp'
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label='Facebook'>
                  <i class="fa fa-whatsapp" aria-hidden="true">Whatsapp</i>
            </a>
            </div>
        </div>
      </section>
    </div>
    
  );
}

export default Footer;