import React from 'react';
import MainWrapper from "../component/MainWrapper";
import Footer from "../component/Footer";
import Menu from "../component/Menu";
import BlogDetailsGalleryPost from "../component/BlogDetailsGalleryPost";
import BlogDetailsCaptionPost from "../component/BlogDetailsCaptionPost";
import BlogDetailsCommentSection from "../component/BlogDetailsCommentSection";
import BlogDetailHeader from "../component/BlogDetailHeader";
import CaptionOfPost from "../component/CaptionOfPost";
import BlogDetailCaptionFooter from "../component/BlogDetailCaptionFooter";
function BlogDetails() {
    return (
        <MainWrapper>
            <div className="col-12 col-md-12 col-xl-9 ">
                <div className="box shadow">
                    <div className="pb-3">
                      {/*  Menu*/}
                        <Menu/>
                       {/* Header*/}
                        <BlogDetailHeader/>
                      {/*  caption-of-post*/}
                        <CaptionOfPost/>
                        {/*pictures*/}
                       <BlogDetailsGalleryPost/>
                        {/*caption*/}
                        <BlogDetailsCaptionPost/>
                        {/*caption footer*/}
                        <BlogDetailCaptionFooter/>
                    </div>
                    {/*Comment Section*/}
                   <BlogDetailsCommentSection/>
                </div>
                <Footer/>
            </div>
        </MainWrapper>
    );
}

export default BlogDetails;