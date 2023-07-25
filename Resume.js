import React from "react";
import '../assets/css/Resume.css';

function Resume ({param1,param2}) {
  const downlodcv = () => {
    window.open("../assets/pdfs/carrer gap letter.pdf","_blank");
  }
    return (
      <>
      <div className="container container-expand-lg container-dark bg-dark">
         <div className="row">
         <div className="">
          <h4>Profile title</h4>
          <p>To be a part of dynamic and innovative team to develop my career and skills in the field of IT     
            web Development where I will learn, contribute and grow with the organization.</p>
        </div>
        <div className="">
          <h4>Key Skills</h4>
          <ul>
            <li>Writing application interface codes using JavaScript following react.js workflows.</li>	Writing application interface codes using JavaScript following react.js workflows.
             ●	Developing and implementing front-end architecture to support user interface concepts.
             ●	Monitoring and improving front-end performance.
             ●	Documenting application changes and developing updates.
             ●	Using HTML, JavaScript and CSS to bring concepts to life. 
        </ul>
        <div className="">
          <h4>Summery</h4>
          <ul>
             <li>Can handle multiple tasks</li>
             <li>	Team worker</li>
             <li>Adoptability</li>
             <li>	Good Communication skills which are helpful to explain my ideas to clients</li>
          </ul>
        </div>
        <div className="col-4">
          <h4>Personal Information</h4>
          <ul>
             <li>Father'sname		: M RAVI</li>
             <li>DateofBirth		  : 14-11-1993</li>
             <li>Languagesknown	:English,Telugu,Hindi</li>
             <li>Interests		    :Travelling and Readingbooks.</li>
          </ul>
        </div>
        </div>
      </div>
        <button className="btn btn-primary" onClick={downlodcv}>
        Download CV
        </button>
     </div>   
    </>
   );
};
export default Resume;
