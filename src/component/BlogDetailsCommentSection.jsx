import React from 'react';
import BlogDetail_CommentBox from "./BlogDetail_CommentBox";
import avatar6 from "../asset/avatar-6.jpg";
import BlogDetailsFa from "./BlogDetailsFA";
import BlogDetailCommentBox from "./BlogDetailCommentBox";

const BlogDetailsCommentSection=(props)=> {
    return (
        <div className=" box--rounded box-inner">
            <h2 className="title title--h3">Comments <span className="color--light">(3)</span></h2>
            {/*Showing comments*/}
            <BlogDetail_CommentBox avatar={avatar6} ago={"5 sec ago"} paragraph={'Very interesting and informative article on design. I learned a lot of new and interesting.'} likes={'80'}  />
            <BlogDetail_CommentBox avatar={avatar6} ago={"5 min ago"} paragraph={'Very interesting and informative article on design. I learned a lot of new and interesting.'} likes={'16'}  />
            <BlogDetail_CommentBox avatar={avatar6} ago={"5 hours ago"} paragraph={'Very interesting and informative article on design. I learned a lot of new and interesting.'} likes={'34'}  />

            {/* Login Form*/}
            <ul className="social-auth">
                <li className="social-auth__item">Login with:</li>
                <BlogDetailsFa  link={'#'} class={'fa fa-facebook'} />
                <BlogDetailsFa  link={'#'} class={'fa fa-twitter'} />
                <BlogDetailsFa  link={'#'} class={'fa fa-dribble'} />
                <BlogDetailsFa  link={'#'} class={'fa fa-behance'} />
            </ul>
            <BlogDetailCommentBox/>
        </div>
    );
}

export default BlogDetailsCommentSection;