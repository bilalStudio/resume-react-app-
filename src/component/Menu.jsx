import React from "react";
import { Link } from "react-router-dom";
const Menu=()=>{
    return(
        <>
            <div className="circle-menu">
                <div className="hamburger">
                    <div className="line"/>
                    <div className="line"/>
                    <div className="line"/>
                </div>
            </div>

            <div className="inner-menu js-menu">
                <ul className="nav nav1" style={{width: "100%"}}>
                    <li className="nav__item" style={{opacity: "1", transform: "translateX(0px)"}}>
                       <Link to='/'>About Us</Link></li>
                    <li className="nav__item" style={{opacity: "1", transform: "translateX(0px)"}}>
                        <Link to={'/resume'}>Resume</Link></li>
                    <li className="nav__item" style={{opacity: "1", transform: "translateX(0px)"}}>
                        <Link to={'/portfolio'}>Portfolio</Link></li>
                    <li className="nav__item" style={{opacity: "1", transform: "translateX(0px)"}}>
                        <Link to={'/blog'}>Blog</Link>
                    </li>
                    <li className="nav__item" style={{opacity: "1",transform: "translateX(0px)"}}>
                        <Link to={'/contact'}>Contact</Link></li>
                </ul>
            </div>
        </>
    )
}

export default Menu