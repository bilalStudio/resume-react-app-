import React from "react";
import Tittle from "./Tittle";
import CompanySvg from "./CompanySvg";
import CompnayName from "../asset/company-name.svg";

const Clients=()=>{
    return(
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
    )
}
export default Clients;