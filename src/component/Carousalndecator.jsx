import React from "react";

const Carousalndecator=(props)=>{
    return(
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                className={props.class} aria-current="true" aria-label="Slide 1"/>
    )
}

export default Carousalndecator;