import React from 'react';
import SideBar from "./SideBar";
const MainWrapper=(props)=>{
    return (
            <div className="container gutter-top">
                <div className="row">
                    <SideBar/>
                    {props.children}
                </div>
            </div>
    );
}
export default MainWrapper;