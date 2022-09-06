import React from 'react';

const BlogDetailsGalleryPost=()=> {
    return (
        <div className="gallery-post">
            <img className="gallery-post__item cover medium-zoom-image ls-is-cached lazyloaded" src={require("../asset/image_06.jpg")} data-zoom="" alt=""/>
            <img className="gallery-post__item cover medium-zoom-image ls-is-cached lazyloaded" src={require("../asset/image_08.jpg")} data-zoom="" alt=""/>
            <div className="gallery-post__caption">Work by
                <a href="#">Colin Adams</a>,
                <a href="#">Mark Craig</a>
            </div>
        </div>
    );
}

export default BlogDetailsGalleryPost;