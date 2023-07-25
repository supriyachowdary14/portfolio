import React from "react";
import '../assets/css/Projects.css';

function Projects() {
  const projects = [
    {
      projectTitle: "Movies Webapp",
      projectName: "MoviesApp",
      description: "",
      image: "https://www.panasiabiz.com/wp-content/uploads/2022/10/Adipurush-Official-Teaser-Hindi-Prabhas-Saif-Ali-Khan.jpg",
      link: "https://github.com/supriyachowdary14/OTT-webapp.git",
      features: ['feature1', 'Feature2', 'feature3'],
      technlogiesUsed: ['Reactjs', 'HTML5', 'css3', 'javscript', 'nodejs', 'bootstrap']
    },
    {
      projectTitle: "Shop Lane App",
      projectName: "Shopping App",
      description: "User-friendly interface: The Shop Lane app provides a seamless and intuitive interface for easy navigation and browsing of products.",
      image: "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      link: "https://codepen.io/supriya-chowdary/pen/rNqBRQr",
      features: ['feature13', 'Feature22', 'feature33'],
      technlogiesUsed: ['Reactjs', 'HTML5', 'css3', 'javscript', 'nodejs', 'bootstrap']
    },
    {
      projectTitle: "IPL Cricket Team",
      projectName: "Cricket League",
      description: "IPL Cricket Team describes the teams which palyed in IPL that includes Players in each team contains players of Cricket",
      image: "https://wallpapercave.com/wp/wp4322404.jpg",
      link: "https://github.com/supriyachowdary14/IplCricketTeamProject",
      features: ['feature11', 'Feature21', 'feature31'],
      technlogiesUsed: ['Reactjs', 'HTML5', 'css3', 'javscript', 'nodejs', 'bootstrap']
    }
  ];
  return (
    <>
    <div className="container">
     <h2>Projects I've created</h2>
    </div>
      {projects.map((project,index) => (
        <div className="container expand-lg container-dark bg-dark">
          <div className="row">
            <div className="">
              <h4>{index+1}.Project Name</h4>
              <p>{project.projectTitle}</p>
            </div>
            <div className="">
              <h4>Poject Discription</h4>
              <p>
                {project.description}
              </p>
              <h4>
                <strong>Key features of the Movies WebApp include:</strong>
              </h4>
              <ul>
                {project.features.map((feature) => (

                  <li>{feature}</li>
                ))}

              </ul>
            </div>
            <div>
              <a href={project.link} rel="noreferrer" target="_blank">{project.link}</a>
            </div>
            <div className="">
              <h4> <strong>Technologies I've used </strong></h4>
              <ul>
                {project.technlogiesUsed.map((technology) => (
                  <li>{technology}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}

    </>
  );
};

export default Projects;
