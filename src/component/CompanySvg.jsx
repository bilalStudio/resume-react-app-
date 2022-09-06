import React from "react";
import CompnayName from '../asset/company-name.svg'
const CompanySvg=(props)=>{
    return(
        <div className="col-12 col-lg-6">
            <svg>
                <g>
                    <image xlinkHref={props.svg}/>
                </g>
            </svg>
        </div>
    )
}

export default CompanySvg;