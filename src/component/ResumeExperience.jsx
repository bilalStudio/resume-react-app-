import React from 'react';

const ResumeExperience=(props)=> {
    return (
        <article className="timeline__item">
            <h5 className="title title--h5 timeline__title">{props.jobTitle}</h5>
            <span className="timeline__period">{props.timePeriod}</span>
            <p className="timeline__description">{props.desc}</p>
        </article>
    );
}
export default ResumeExperience;