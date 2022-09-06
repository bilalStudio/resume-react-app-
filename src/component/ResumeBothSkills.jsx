import React from 'react';
import ResumeSkills from "./ResumeSkills";

const ResumeBothSkills=(props)=> {
    return (
        <div className="box-inner box-inner--rounded">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <h2 className="title title--h3">Design Skills</h2>
                    <div className="box box__second">
                        <ResumeSkills  style={{width: "80%",zIndex: "2"}} title={'Web Design'} persontage={'80%'}  />
                        <ResumeSkills  style={{width: "75%",zIndex: "2"}} title={'Graphic Design'} persontage={'75%'}  />
                        <ResumeSkills  style={{width: "90%",zIndex: "2"}} title={'Photoshop'} persontage={'90%'}  />
                        <ResumeSkills  style={{width: "50%",zIndex: "2"}} title={'Illustrator'} persontage={'50%'}  />

                    </div>
                </div>
                {/*Codding skills*/}
                <div className="col-12 col-lg-6 mt-4 mt-lg-0">
                    <h2 className="title title--h3">Coding Skills</h2>
                    <div className="box box__second">
                        <ResumeSkills  style={{width: "70%",zIndex: "2"}} title={'WordPress'} persontage={'70%'}  />
                        <ResumeSkills  style={{width: "70%",zIndex: "2"}} title={'Javascript'} persontage={'70%'}  />
                        <ResumeSkills  style={{width: "100%",zIndex: "2"}} title={'HTML'} persontage={'100%'}  />
                        <ResumeSkills  style={{width: "30%",zIndex: "2"}} title={'PHP'} persontage={'30%'}  />
                    </div>
                </div>

            </div>
        </div>

    );
}

export default ResumeBothSkills;