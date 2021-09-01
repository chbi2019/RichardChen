import React from 'react'
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import './ContactForm.css';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_YJH1l1tK3CUPv35HcO53k");

function ContactForm() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_bbmofu2', 'template_hrc44wd', e.target, 'user_YJH1l1tK3CUPv35HcO53k')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    
    return (

        <div className='contact-form-wrapper'>
        <Form onSubmit={sendEmail}>

            <FloatingLabel
                controlId="visitor-name"
                label="Enter your name"
                className="mb-3"
            >
                <Form.Control type="text" placeholder="Enter your name*" name="name"/>
            </FloatingLabel>

            <FloatingLabel
                controlId="visitor-email"
                label="Enter your email"
                className="mb-3"
            >
                <Form.Control type="email" placeholder="Enter your email*" name="email"/>
            </FloatingLabel>

            <Form.Group className="mb-3" controlId="visitor-message">
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" name="message" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Send
            </Button>
            </Form>
            </div>

    )
}

export default ContactForm
