import React from 'react';
import './HomeContent.css';
import richardPhoto from '../images/richardPhoto.png'
import richardResume from '../images/richardResume.pdf';

function HomeContent() {

    return (
        <>
            <div className='home-container'>
                <img className='richardPhoto' src={richardPhoto} />
                <div className='info-section'>
                    <p>Richard Chen</p>
                    <p>Software Engineer</p>
                    <a href={richardResume}>Resume<i className='fas fa-download'></i></a>
                </div>
            </div>
        </>
    );
}

export default HomeContent;
