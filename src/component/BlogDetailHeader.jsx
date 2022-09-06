import React from 'react';
import BlogDetailParagraph from "./BlogDetailParagraph";

const BlogDetailHeader=()=> {
    return (
        <div className="header-post">
            <div className="header-post__date">Sep 15, 2019</div>
            <h1 className="title title--h1">Design Conferences in 2019</h1>
            <div className="caption-post">
                <BlogDetailParagraph paragraph={'Above all, think of life as a prototype. We can conduct experiments, make\n' +
                    '                                    discoveries, and change our perspectives. We can look for opportunities to turn\n' +
                    '                                    processes into projects that have tangible outcomes.'} />
            </div>
            <div className="header-post__image-wrap">
                <img className="cover ls-is-cached lazyloaded" src={require("../asset/ladies_purse.jpg")} alt=""/>
            </div>
        </div>
    );
}
export default BlogDetailHeader;