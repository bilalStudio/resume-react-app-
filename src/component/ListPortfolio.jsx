import React from 'react';

const  ListPortfolio=(props)=> {
    return (
        <li className={props.class} data-filter="*"><a className="filter__link active"
                                                               href={props.link}>{props.data}</a></li>
    );
}

export default ListPortfolio;