import React from "react";
import Tittle from "./Tittle";
import Card from "./Card";
import art from "../asset/art_template.svg";
import radio from "../asset/radio.svg";
import mobile from "../asset/mobile.svg";
import camera from "../asset/camra.svg";

const WhatImDoing=()=>{
    return(
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
    )
}

export default WhatImDoing;