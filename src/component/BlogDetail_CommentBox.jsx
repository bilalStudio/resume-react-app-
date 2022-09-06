import React from 'react';
import avatar6 from "../asset/avatar-6.jpg";

const BlogDetailCommentBox=(props)=> {
    return (
        <div className="comment-box__inner">
            <div className="avatar3">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     width="60" height="60">
                    <defs>
                        <pattern id="img" patternUnits="userSpaceOnUse" width="100" height="100">
                            <image xlinkHref={props.avatar} x="-25" width="150"
                                   height="100"/>
                        </pattern>
                    </defs>
                    <polygon id="hex" points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img)"/>
                </svg>
            </div>
            <div className="comment-box__body">
                <h5 className="comment-box__details"><span>{props.title}</span><span
                    className="comment-box__details-date">{props.ago}</span></h5>
                <p>{props.paragraph}</p>
                <ul className="comment-box__footer">
                    <li><i className="fa fa-heart "/><span className="text-muted">{props.likes}</span></li>
                    <li><i className="fa fa-reply "/><span className="text-muted">Reply</span></li>
                </ul>
            </div>
        </div>
    );
}

export default BlogDetailCommentBox;