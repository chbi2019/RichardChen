import React from 'react'
import SkillCard from './SkillCard'
import './AboutContent.css';

function AboutContent() {
    return (
        <div className='about-container'>
            <h1>About Me</h1>
            <div className='skill-card-wrapper'>
                <div className='two-skill-card'>
                    <SkillCard bars={[90, 70, 60,70,50]} cardTitle={'Front End'} barNames={['HTML', 'CSS', 'Javascript','Jquery', 'React']} />
                    <SkillCard bars={[60, 60, 50,60]} cardTitle={'Back End'} barNames={['Java', 'C#/.Net', 'PHP','C']} />
                </div>
                <div className='two-skill-card'>
                    <SkillCard bars={[90, 80, 70]} cardTitle={'Database'} barNames={['SQL', 'MongoDB', 'FireBase']} />
                    <SkillCard bars={[90, 90, 80, 80,70]} cardTitle={'Others'} barNames={['Github', 'VS Code', 'Android', 'Eclipse','NetBeans']} />
                </div>
            </div>
        </div>
    )
}

export default AboutContent
