import React from 'react';
import MainWrapper from "../component/MainWrapper";
import Footer from "../component/Footer";
import Menu from "../component/Menu";
import ResumeEducationAndExperience from "../component/ResumeEducationAndExperience";
import ResumeBothSkills from "../component/ResumeBothSkills";
import MainTitle from "../component/MainTitle";

function Resume() {
    return (
        <MainWrapper>
            <div className="col-12 col-md-12 col-xl-9">
                <div className="box shadow pb-0">
                    {/*Menu*/}
                   <Menu/>
                    {/*Title*/}
                   <MainTitle title={'Resume'}/>
                     {/*Education & Experience*/}
                    <ResumeEducationAndExperience/>
                    {/*Design skills*/}
                    <ResumeBothSkills/>
                </div>
               {/*Footer*/}
                <Footer/>
            </div>
        </MainWrapper>
    );
}
export default Resume;