import React from "react";
import Card from "./Card";
import art from '../asset/art_template.svg';
import radio from '../asset/radio.svg';
import mobile from '../asset/mobile.svg';
import camera from '../asset/camra.svg';
import ReactLogo from '../asset/avatar-1.jpg';
import CompnayName from '../asset/company-name.svg'
import Tittle from "./Tittle";
import TestimonialsCard from "./TestimonialsCard";
import CompanySvg from "./CompanySvg";
import Carousalndecator from "./Carousalndecator";
const Main=()=>{
    return(
        <div className="col-12 col-md-12 col-xl-9">
            <div className="box shadow pb-0">
               {/*Menu*/}
                <div className="circle-menu">
                    <div className="hamburger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
                </div>
                {/*About*/}
                <div className="pb-0 pb-sm-2">
                    <h1 className="title title--h1 first-title title__separate">About Me</h1>
                    <p>I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and
                        print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.</p>
                    <p>My job is to build your website so that it is functional and user-friendly but at the same time
                        attractive. Moreover, I add personal touch to your product and make sure that is eye-catching
                        and easy to use. My aim is to bring across your message and identity in the most creative way. I
                        created web design for many famous brand companies.</p>
                </div>

                {/*What*/}
                <div className="box-inner pb-0">
                    <Tittle   tittle={'What I\'m Doing'} />
                    <div className="row">
                        {/*Case Item 1*/}
                        <Card class={'col-12 col-lg-6'} tittle={'Web Design'} paragraph={'The most modern and high-quality design made at a professional level.'} svg={art}   />
                        {/* Case Item 2*/}
                        <Card class={'col-12 col-lg-6'} tittle={'Web Development'} paragraph={'High-quality development of sites at the professional level.'} svg={radio}   />
                        {/*Case Item 3*/}
                        <Card class={'col-12 col-lg-6'} tittle={'Mobile Apps'} paragraph={'Professional development of applications for iOS and Android.'} svg={mobile}   />
                       {/*Case Item 4*/}
                        <Card class={'col-12 col-lg-6'} tittle={'Photography'} paragraph={'I make high-quality photos of any category at a professional level.'} svg={camera}   />
                    </div>
                </div>
                 {/*Testimonials*/}
                <div className="box-inner--white box-inner ">
                    <Tittle   tittle={'Testimonials'} />
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                           {/* <Carousalndecator class={'active slider-button'}/>
                            <Carousalndecator class={'slider-button'}/>
                            <Carousalndecator  class={'slider-button'}/>*/}
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                    className="active slider-button" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                    className="slider-button" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                    className="slider-button" aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <TestimonialsCard xlink={ReactLogo}  tittle={'Jessica Miller'} paragraph={'thanks to the skills of Felecia, we have design that we can be proud of.'}/>
                            </div>
                            <div className="carousel-item">
                                <TestimonialsCard xlink={ReactLogo}  tittle={'Jessica Miller'} paragraph={'thanks to the skills of Felecia, we have design that we can be proud of.'}/>
                            </div>
                            <div className="carousel-item">
                                <TestimonialsCard xlink={ReactLogo}  tittle={'Jessica Miller'} paragraph={'thanks to the skills of Felecia, we have design that we can be proud of.'}/>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Clients.jsx*/}
                <div className="box-inner box-inner--rounded">
                    <Tittle tittle={'Clients'}/>
                    <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0"
                                    className="active slider-button" aria-current="true" aria-label="Slide 1"/>
                            <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1"
                                    className="slider-button" aria-label="Slide 2"/>
                            <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="2"
                                    className="slider-button" aria-label="Slide 3"/>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <CompanySvg svg={CompnayName} />
                            </div>
                            <div className="carousel-item">
                                <CompanySvg svg={CompnayName} />
                            </div>
                            <div className="carousel-item">
                                <CompanySvg svg={CompnayName} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*Footer*/}
            <footer className="footer">© 2019 vCard</footer>
        </div>
    )
}
export default Main;