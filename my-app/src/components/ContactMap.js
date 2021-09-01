import React from 'react'

import './ContactMap.css';

function ContactMap() {
    return (
        <div className="google-map-wrapper">
            <iframe className='google-map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2891.176443846278!2d-79.6421764845053!3d43.561206379124464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b46b063eb8e95%3A0x31f7974534056d93!2s3025+Cedarglen+Gate%2C+Mississauga%2C+ON+L5C+3A5!5e0!3m2!1sen!2sca!4v1558615966791!5m2!1sen!2sca" ></iframe>
        </div>
    )
}

export default ContactMap
