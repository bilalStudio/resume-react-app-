import React from 'react';

const MainTitle=(props)=> {
    return (
        <div className="pb-3">
            <h1 className="title title--h1 first-title title__separate">{props.title}</h1>
        </div>
    );
}

export default MainTitle;