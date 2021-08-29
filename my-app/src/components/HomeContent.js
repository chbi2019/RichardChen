import React from 'react';
import './HomeContent.css';
import binPhoto from '../images/binPhoto.png'

function HomeContent() {

    return (
        <>
            <div className='home-container'>
                <img className='binPhoto' src={binPhoto} />
                <div className='info-section'>
                    <p>Richard Chen</p>
                    <p>Software Engineer</p>
                    <a href='/'>Resume</a>
                </div>
            </div>
        </>
    );
}

export default HomeContent;
