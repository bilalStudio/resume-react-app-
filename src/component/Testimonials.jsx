import React from "react";
import Tittle from "./Tittle";
import TestimonialsCard from "./TestimonialsCard";
import ReactLogo from "../asset/avatar-1.jpg";

const Testimonials=()=>{
    return(
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
    )
}
export default Testimonials