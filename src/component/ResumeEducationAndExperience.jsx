import React from 'react';
import education from "../asset/hat.svg";
import ResumeEducation from "./ResumeEducation";
import bag from "../asset/bag.svg";
import ResumeExperience from "./ResumeExperience";

const ResumeEducationAndExperience=(props)=> {
    return (
        <div className="pb-0">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h2 className="title title--h3"><img className="title-icon" src={education} alt=""/> Education</h2>
                    {/*Education*/}
                    <div className="timeline">
                        <ResumeEducation school={'University School of the Arts'} timePeriod={'2007 — 2009'} desc={'Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias  exceptur.'}   />
                        <ResumeEducation school={'New York Academy of Art'} timePeriod={'2005 — 2007'} desc={'Ratione voluptatem sequi nesciunt, facere quisquams facere menda ossimus, omnis voluptas assumenda est omnis..'}   />
                        <ResumeEducation school={'High School of Art and Design'} timePeriod={'2003 — 2005'} desc={'Duis aute irure dolor in reprehenderit involuptate, quila voluptas mag odit aut fugit, sed consequuntur magni dolores eos.'}   />
                    </div>
                </div>
                {/*Experience*/}
                <div className="col-12 col-lg-6">
                    <h2 className="title title--h3"><img className="title-icon" src={bag} alt=""/> Experience</h2>
                    <div className="timeline">
                        <ResumeExperience jobTitle={'Creative Director'} timePeriod={'2015 — Present'} desc={'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'} />
                        <ResumeExperience jobTitle={'Art Director'} timePeriod={'2013 — 2015'} desc={'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'} />
                        <ResumeExperience jobTitle={'Web Designer'} timePeriod={'2010 — 2013'} desc={'Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.'} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default ResumeEducationAndExperience;