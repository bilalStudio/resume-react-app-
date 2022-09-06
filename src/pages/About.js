import React from "react";
import Footer from "../component/Footer";
import Menu from "../component/Menu";
import AboutMe from "../component/AboutMe";
import WhatImDoing from "../component/WhatImDoing";
import Testimonials from "../component/Testimonials";
import Clients from "../component/Clients";
import MainWrapper from "../component/MainWrapper";
/*import ScriptTag from 'react-script-tag';*/
function AboutUs() {
    return (
        <MainWrapper>
            <div className="col-12 col-md-12 col-xl-9">
                <div className="box shadow pb-0">
                    {/*Menu*/}
                    <Menu/>
                    {/*About*/}
                    <AboutMe/>
                    {/*What*/}
                    <WhatImDoing/>
                    {/*Testimonials*/}
                    <Testimonials/>
                    {/*Clients*/}
                    <Clients/>
                </div>
                {/*Footer*/}
                <Footer/>
            </div>
        </MainWrapper>
    );
}
/*<ScriptTag type={'text/javascript'} >

</ScriptTag>*/

export default AboutUs;
