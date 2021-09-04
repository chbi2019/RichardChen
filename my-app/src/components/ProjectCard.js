import React from 'react';
import { Card, Button } from 'react-bootstrap';

import richardPhoto from '../images/richardPhoto.png';
import './ProjectCard.css';


function ProjectCard(props) {

    const title = props.title;
    const skill = props.skill;
    return (
        <>

            <Card style={{ width: '18rem' }}>
                <div className='card-image-container'>
                    <Card.Img className='card-image' variant="top" src={richardPhoto} />
                    <div className='text-on-image'>Under Construction</div>
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {skill}
                    </Card.Text>
                    <div className='card-button-container'>
                        <Button variant="primary">Demo</Button>
                        <Button variant="primary">GitHub</Button>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProjectCard
