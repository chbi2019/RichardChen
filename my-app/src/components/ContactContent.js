import React from 'react'
import ContactForm from './ContactForm'
import './ContactContent.css';
import ContactMap from './ContactMap';


function ContactContent() {
    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <div className='contact-content-wrapper'>
                <ContactForm />
                <ContactMap/>
            </div>
        </div>
    )
}

export default ContactContent
