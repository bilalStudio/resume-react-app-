import React from "react";
const Card=(props)=>{
    return(
        <div className={props.class}>
            <div className="case-item box box__second">
                <img className="case-item__icon" src={props.svg} alt=""/>
                <div>
                    <h3 className="title title--h5">{props.tittle}</h3>
                    <p className="case-item__caption">{props.paragraph}</p>
                </div>
            </div>
        </div>
    )
}
export default Card;
