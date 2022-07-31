import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Subscribe to receive the best home deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Our Team</Link>
            <Link to='/'>Offices</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Channels</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>House</Link>
            <Link to='/'>Condominium</Link>
            <Link to='/'>Commercial</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Infinite
              <i class='fa-brands fa-houzz' />
            </Link>
          </div>
          <small class='website-rights'>Infinite © 2022</small>
          <div class='social-icons'>
            <Link class='social-icon-link facebook' to='/' target='_blank' aria-label='Facebook'>
              <i class='fab fa-facebook'/>
            </Link>
            <Link class='social-icon-link twitter' to='/' target='_blank' aria-label='Twitter'>
              <i class='fab fa-twitter'/>
            </Link>
            <Link class='social-icon-link instagram' to='/' target='_blank' aria-label='Instagram'>
              <i class='fab fa-instagram'/>
            </Link>
            <Link class='social-icon-link youtube' to='/' target='_blank' aria-label='Youtube'>
              <i class='fab fa-youtube'/>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;