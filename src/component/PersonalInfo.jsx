import React from "react";

const PersonalInfo=(props)=>{
    return(
        <li className="contacts-block__item">
            <i className={props.fa}></i>{props.data}
        </li>
    )
}

export default PersonalInfo;