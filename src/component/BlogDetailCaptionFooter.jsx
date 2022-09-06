import React from 'react';
import BlogDetailFooter from "./BlogDetailFooter";

const BlogDetailCaptionFooter=(props)=> {
    return (
        <footer className="footer-post">
            <BlogDetailFooter link={'http://facebook.com'} class={'fa fa-facebook'} name={'Facebook'} />
            <BlogDetailFooter link={'http://twitter.com'} class={'fa fa-twitter'} name={'Twitter'} />
            <BlogDetailFooter link={'http://linkedin.com'} class={'fa fa-linkedin'} name={'Linkedin'} />
        </footer>
    );
}

export default BlogDetailCaptionFooter;