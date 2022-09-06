import React from 'react';

const BlogDetailCommentBox=()=> {
    return (
        <form className="comment-form">
            <textarea id="commentForm" className="textarea textarea--white form-control"
                      required="required" placeholder="Write a Comment..." rows="1"
                      style={{overflow: "hidden" ,overflowWrap: "break-word", height: "58px" ,outline: "current none medium;"}}
                      tabIndex="1"/>
            <i className="fa fa-smile-o smile"/>
            <button type="submit" className="btn">
                <i className="fa fa-send faSend"/>
            </button>
        </form>
    );
}

export default BlogDetailCommentBox;