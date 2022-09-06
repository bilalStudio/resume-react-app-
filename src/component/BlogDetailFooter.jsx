import React from 'react';

const BlogDetailFooter=(props)=> {
    return (
        <a className="footer-post__share" href={props.link}><i
            className={props.class}/><span>{props.name}</span></a>
    );
}
export default BlogDetailFooter;