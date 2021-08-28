import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-icon-wrapper'>
                <Link className='footer-icon facebook'
                    to='/'
                    target='_blank'
                    aria-label='Facebook'>
                    <i className='fab fa-facebook-f' />

                </Link>
                <Link className='footer-icon instagram'
                    to='/'
                    target='_blank'
                    aria-label='Instagram'>
                    <i className='fab fa-instagram' />

                </Link>
                <Link className='footer-icon linkedin'
                    to='/'
                    target='_blank'
                    aria-label='Linkedin'>
                    <i className='fab fa-linkedin' />

                </Link>
                <Link className='footer-icon github'
                    to='/'
                    target='_blank'
                    aria-label='Github'>
                    <i className='fab fa-github' />

                </Link>
            </div>

            <small class='website-rights'>RC © 2021</small>

        </div>
    )
}

export default Footer
