import React from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SkillCard.css';



function AboutSkillCard(props) {
    const bars = props.bars;
    const cardTitle = props.cardTitle;
    const barNames = props.barNames;

    const cardBars = bars.map((bar) => <div className='progress-bar'><ProgressBar label={bar + '%'} now={bar} /> </div>);
    const cardBarNames = barNames.map((barName) => <div>{barName}</div>);


    return (

        <>
            <div className='skill-card-container'>
                <h1>{cardTitle}</h1>
                <div className='card-names-bars-wrapper'>
                    <div className='card-names'>{cardBarNames}</div>
                    <div className='card-bars'>{cardBars}</div>
                </div>
            </div>

        </>
    );
}



export default AboutSkillCard
