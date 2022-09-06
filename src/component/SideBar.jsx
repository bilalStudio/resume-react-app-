import React from "react";

import ReactLogo from '../asset/avatar-1.jpg';
import PersonalInfo from "./PersonalInfo";


const SideBar=()=>{
    return(
        <>
            <div className="col-12 col-md-12 col-xl-3">
                <div className="sidebar box shadow pb-0">
                    <svg className="avatar avatar--180" viewBox="0 0 188 188">
                        <g className="avatar__box">
                            <image xlinkHref={ReactLogo}   height="100%" width="100%"/>
                        </g>
                    </svg>
                    <div className="text-center">
                        <h3 className="title title--h3 sidebar__user-name"><span
                            className="weight--500">Felecia</span> Brown</h3>
                        <div className="badge badge--gray">Creative Director</div>
                      {/* Social */}
                        <div className="social">
                            <a className="social__link" href="src/component/SideBar"><i
                                className="fa fa-facebook"></i></a>
                            <a className="social__link" href="src/component/SideBar"><i
                                className="fa fa-twitter"></i></a>
                            <a className="social__link" href="src/component/SideBar"><i
                                className="fa fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="sidebar__info box-inner box-inner--rounded">
                        <ul className="contacts-block">
                            <PersonalInfo fa={'fa fa-calendar'} data={'March 12, 1995'}     />
                            <PersonalInfo fa={'fa fa-map-marker'} data={'Hong Kong, China'}     />
                            <PersonalInfo fa={'fa fa-envelope'} data={'example@mail.com'}     />
                            <PersonalInfo fa={'fa fa-phone'} data={'+1 (070) 123-4567'}     />
                            <PersonalInfo fa={'fa fa-skype'} data={'Felecia_Brown'}     />
                        </ul>
                        <a className="btn" href="src/component/SideBar#"><i className="fa fa-download"></i> Download CV</a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SideBar;