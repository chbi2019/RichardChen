import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-icon-wrapper'>
                <a href='/'>
                    <i className='fab fa-facebook-f' />

                </a>
                <a href='/'>
                    <i className='fab fa-instagram' />

                </a>
                <a href='/'>
                    <i className='fab fa-linkedin' />

                </a>
                <a href='https://github.com/chbi2019'>
                    <i className='fab fa-github' />

                </a>
            </div>

            <small class='website-rights'>RC © 2021</small>

        </div>
    )
}

export default Footer
