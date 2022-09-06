import React from 'react';

const ResumeSkills=(props)=> {
    return (
        <div className="progress">
            <div className="progress-bar" role="progressbar" aria-valuenow="80"
                 aria-valuemin="0" aria-valuemax="100" style={props.style}>
                <div className="progress-text"><span>{props.title}</span><span>{props.persontage}</span></div>
            </div>
        </div>
    );
}

export default ResumeSkills;