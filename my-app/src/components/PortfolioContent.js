import React from 'react'
import ProjectCard from './ProjectCard'
import './PortfolioContent.css';

function PortfolioContent() {
    return (
        <div className='portfolio-container'>
            <h1 className='portfolio-container-title'>Portfolio</h1>
            <div className='project-card-wrapper'>
                <ProjectCard title='Covid Traking App' skill='React' />
                <ProjectCard title='To Do App' skill='React' />
                <ProjectCard title='Order System App' skill='React'/>
                
            </div>
        </div>
    )
}

export default PortfolioContent
