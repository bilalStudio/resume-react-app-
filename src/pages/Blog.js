import React from 'react';
import Menu from "../component/Menu";
import Footer from "../component/Footer";
import MainWrapper from "../component/MainWrapper";
import BlogCard from "../component/BlogCard";
import MainTitle from "../component/MainTitle";


function Blog() {
    return (
        <MainWrapper>
            <div className="col-12 col-md-12 col-xl-9">
                <div className="box shadow pb-0">
                    {/*Menu*/}
                    <Menu/>
                    <MainTitle title={'Blog'}/>
                    {/*  News */}
                    <div className="news-grid">
                      {/* row*/}
                        <div className="row">
                           {/* Post1*/}
                            <BlogCard   date={'Sep 16, 2019'} link={'blog_details.html'} img={require('../asset/image_02.jpg')} tittle={'Design Conferences in 2019'} paragraph={'Veritatis et quasi architecto beatae vitae dicta sunt, explicabo.'} />
                            {/*Post2 */}
                            <BlogCard  date={'Sep 15, 2019'} link={'blog_details.html'} img={require('../asset/image_06.jpg')} tittle={'Best Fonts Every Designer'} paragraph={'Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi.'} />
                        </div>
                      {/* row2*/}
                        <div className="row">
                           {/* Post3 */}
                            <BlogCard  date={'Sep 15, 2019'} link={'blog_details.html'} img={require('../asset/image_08.jpg')} tittle={'Design Digest #80'} paragraph={'Excepteur sint occaecat cupidatat no proident, quis nostrum exercitationem ullam corporis suscipit.'} />
                           {/* Post4*/}
                            <BlogCard  date={'Sep 15, 2019'} link={'blog_details.html'} img={require("../asset/shoes_image.jpg")} tittle={'UI Interactions of the week'} paragraph={'Enim ad minim veniam, consectetur adipiscing elit, quis nostrud exercitation ullamco laboris nisi.'} />
                        </div>
                      {/* row3*/}
                        <div className="row">
                           {/* Post5 */}
                            <BlogCard  date={'Sep 15, 2019'} link={'blog_details.html'} img={require('../asset/pink_painting.jpg')} tittle={'The Forgotten Art of Spacing'} paragraph={'Maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'} />
                           {/* Post5 */}
                            <BlogCard  date={'Sep 15, 2019'} link={'blog_details.html'} img={require('../asset/avocado.jpg')} tittle={'Design Digest #79'} paragraph={'Optio cumque nihil impedit uo minus quod maxime placeat, velit esse cillum.'} />
                        </div>
                    </div>
                </div>
                {/*Footer*/}
                <Footer/>
            </div>
        </MainWrapper>
    );
}
export default Blog;