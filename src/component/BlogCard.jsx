import React from 'react';
import {Link} from "react-router-dom";
const BlogCard=(props)=> {
    return (
        <div className="col-lg-6">
            <article className="news-item box">
                <div className="news-item__image-wrap overlay overlay--45">
                    <div className="news-item__date">{props.date}</div>
                    <Link className="news-item__link" to={'/blog_details'}/>
                    <img className="cover ls-is-cached lazyloaded" src={props.img} alt=""/>
                </div>
                <div className="news-item__caption">
                    <h2 className="title title--h4">{props.tittle}</h2>
                    <p>{props.paragraph}</p>
                </div>
            </article>
        </div>
    );
}
export default BlogCard;