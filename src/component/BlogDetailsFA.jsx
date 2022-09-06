import React from 'react';

const BlogDetailsFa=(props)=> {
    return (
        <li className="social-auth__item">
            <a className="social-auth__link" href={props.link}>
                <i className={props.class}/>
            </a>
        </li>
    );
}

export default BlogDetailsFa;