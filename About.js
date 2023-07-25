// About.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {useSearchParams, createSearchParams,useNavigate} from "react-router-dom";
import "../assets/css/About.css";

function About() {
  const About = (
    {
      title:"how to pass data in react components",
      description:"Looking for an entry level opportunity for Full Stack MERN develope programme with passion for learning and adapting to new technology with Full Stack MERN developer program certification from Edyoda,I am expertise in language such as Node js,Java , React and DSA, and web techonologies like HTML,CSS and javascript, and databases like MySQL, MongoDB",
      image:"https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg",
      skillsSet: ["HTML", "CSS", "Javascript", "React"],
      toolsUsed: ["JQuery", "AJAX", "Json", "NodeJs"],
      address:"kondayapalem, Golagamudi Road, Nellore, AP.",
    });
    const navigate = useNavigate();
    const passingdata = (id) =>{
      navigate({
        pathname:'/forms',
        search:createSearchParams({
          id:"supriya"
        }).toString()
      });
    };
    const [searchparams]= useSearchParams();
    console.log(JSON.parse(searchparams.get('id')));
    console.log(searchparams.get('id'));
  return (
    <>
    <Container className="about-section expand-lg about-dark bg-dark">
      <Row>
        <Col>
          <h1>
            <strong className="">Know Who I'M</strong>
          </h1>
          <p>
          {About.description}
          </p>
        </Col>
        <Col md={5} className="about-img">
          <img
            src="https://t4.ftcdn.net/jpg/02/29/75/83/240_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
            alt="about"
            className="img-fluid"
          />
        </Col>
      </Row>
      <div className="project-heading">
        <h1>
          <strong className="purple">Professional Skillset </strong>
        </h1>
        <ul>
        {About.skillsSet.map((skill,index) => (
          <li>{index},{skill}</li>
        ))}
        </ul>
      </div>
      <h4 className="project-heading">
        <strong className="purple">Tools I used</strong>
      </h4>
      <ul>
        {About.toolsUsed.map((tools, index) => (
          <li >{index},{tools}</li>
        ))}
      </ul>
      <div className="lg:w-1/2 px-6">
        <ul>
          {About.address}
        </ul>
       <button style={{marginBottom: "30px"}}  onClick={passingdata} className="btn btn-primary">Fill the Form</button>
      </div>
    </Container>
    </>
  );
};

export default About;
