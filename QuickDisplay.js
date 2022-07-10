import React,{Component} from 'react';


const QuickDisplay = (props) => {
    const renderMeal = ({quickData}) => {
        if(quickData){
            return quickData.map((item) => {
                return(
                    
                        <div className="movie">
                            <div className="profile">
                                <div className="prom">
                                   <img src="./images/naaa.jpeg" alt="promm" id="naav"/>
                                </div>
                            </div>
                            <hr/>
                            <div className="intro">
                                {item.Student_Intro}
                            </div>
                            <hr/>
                            <div className="about">
                                <center><h3>About Us</h3></center>
                                {item.About_student}
                            </div>
                            <hr/>
                            <div className="Aca">
                                <center><h3>Academics</h3></center>
                                {item.Academics}
                            </div>
                            <hr/>
                            
                            <div className="skills">
                                <center><h3>SKILLS</h3></center>
                                {item.Student_skill}
                            </div>
                            <hr/>
                            <div className="projects">
                                <center><h3>PROJECTS</h3></center>
                                <div classname="project1">
                                    {item.Project_Analysis}
                                </div>
                                <hr/>
                                <div classname="project2">
                                    {item.Project_income}
                                </div>
                                <hr/>
                                <div classname="project3">
                                    {item.Project_GUI}
                                </div>
                                <hr/>
                                <div classname="project4">
                                    {item.Project_TODO}
                                </div>
                                <hr/>
                                <div classname="project5">
                                    {item.Project_Bank}
                                </div>
                            </div>
                            <hr/>
                            <div className="comm">
                                <center><h3>COMMUNITY WORK</h3></center>
                                {item.Community_work}
                            </div>
                            <hr/>
                            <div className="cer">
                                <center><h3>CERTIFICATIONS</h3></center>
                                <div className="ce1">
                                    {item.Certificate1}
                                </div>
                                <hr/>
                                <div className="ce2">
                                    {item.certificate2}
                                </div>
                                <hr/>
                                <div className="ce3">
                                    {item.certificate3}
                                </div>
                            </div>
                            <hr/>
                            <div className="lan">
                                <center><h3>LANGUAGES</h3></center>
                                {item.Student_lan}
                            </div>
                            <hr/>
                            <div className="inte">
                                <center><h3>INTERESTS</h3></center>
                                {item.student_interests}
                            </div>
                        </div>
                        
                    
                )
            })
        }
    }

    return(
        <>
            {renderMeal(props)}
        </>
    )

}
export default QuickDisplay;