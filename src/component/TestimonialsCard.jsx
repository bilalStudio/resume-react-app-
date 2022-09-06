import React from "react";
import ReactLogo from "../asset/avatar-1.jpg";

const TestimonialsCard=(props)=>{
    return(
        <div className="col-12 col-lg-12">
            <div className="case-item2 box box__second2">
                <div className="headings-paragraph">
                    <div className="avatar2">
                        <svg className="avatar--80" width="80" height="80"
                             viewBox="0 0 327.846 318.144">
                            <defs>
                                <mask id="msk">
                                    <path className="a"
                                          transform="translate(111.598) rotate(30)"
                                          d="M172.871,0a28.906,28.906,0,0,1,25.009,14.412L245.805,97.1a28.906,28.906,0,0,1,0,28.989L197.88,208.784A28.906,28.906,0,0,1,172.871,223.2H76.831a28.906,28.906,0,0,1-25.009-14.412L3.9,126.092A28.906,28.906,0,0,1,3.9,97.1L51.821,14.412A28.906,28.906,0,0,1,76.831,0Z"/>
                                </mask>
                            </defs>
                            <image xlinkHref={ReactLogo}   height="100%" width="100%"/>
                            <image mask="url(#msk)" height="100%" width="100%"
                                   xlinkHref={props.xlink}
                                   preserveAspectRatio="xMidYMin slice"/>
                        </svg>
                    </div>
                    <div className="testimonal-data">
                        <h3 className="title title--h5">{props.tittle}</h3>
                        <p className="case-item__caption">{props.paragraph}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialsCard;