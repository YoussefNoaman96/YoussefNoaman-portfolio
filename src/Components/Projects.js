import Img1 from '../assets/img/project-img1.png';
import Img2 from '../assets/img/project-img2.png';
import Img3 from '../assets/img/project-img3.png';
import Img4 from '../assets/img/project-img4.png';
import image from "../assets/img/color-sharp2.png";
import {Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects = [
        {
            title: "Dream-Cars",
            description: "HTML & CSS",
            img: Img1,
            url:"https://youssefnoaman96.github.io/Dream-Cars/",
        },
        {
            title: "Fresh Feast",
            description: "HTML5 & CSS3",
            img: Img2,
            url:"https://youssefnoaman96.github.io/Fresh-Feast/",
        },
        {
            title: "WorldEscape",
            description: "HTML & CSS & BootStrap",
            img: Img3,
            url:"https://youssefnoaman96.github.io/WorldEscape/"
        },
        {
            title: "Luxora",
            description: "HTML & CSS & BootStrap & JS",
            img: Img4,
            url:"https://youssefnoaman96.github.io/Luxora/"
        },
      
    ]
    return (
        <section className="container" id="projects" >
            <div className=" my-projects">
                <TrackVisibility>
                {({isVisible}) =>
                    <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                        <div className="info text-center">
                            <h2>My Projects</h2>
                            <p>I'm Youssef. I'm Engeneering. I live in cairo. These are some of my projects.</p>
                        </div>
                    </div>}
                </TrackVisibility>
                <Tab.Container className="projects-tabs btns-section text-center " defaultActiveKey="first">
                    <Nav variant="pills"  className="nav-pills mb-3 justify-content-center align-items-center">
                        <Nav.Item className="nav-item btn1-section">
                            <Nav.Link eventKey="first" className="link-section first">1 st Section</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item btn2-section">
                            <Nav.Link eventKey="second" className="link-section w-100">2nd Section</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item  btn3-section">
                            <Nav.Link eventKey="third" className="link-section third">3rd Section</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    
                    <Tab.Content id="slideInUp" > 
                    <Tab.Pane eventKey="first" className="content-btn1">
                        <div className="projects text-center row g-4">
                            {
                            projects.map((project, idx) => {
                                return (
                                <div key={idx} className="space col-lg-4 col-md-6 col-12">
                                    <div className="project">
                                    <div className="image w-100">
                                        <img src={project.img} alt={project.title} className="w-100 project-img" />
                                        <div className="overlay">
                                        <h3>{project.title}</h3>
                                        <p>{project.description}</p>
                                        </div>
                                    </div>
                                    <a target="_blank" rel="noopener noreferrer" href={project.url}>
                                        Visit Website <i className="fa-solid fa-arrow-right text-white ms-1"></i>
                                    </a>
                                    </div>
                                </div>
                                )
                            })
                            }
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second" className="content-btn2 bg-warning"></Tab.Pane>
                    <Tab.Pane eventKey="third" className="content-btn3">
                        <p className="text-center">I'm Youssef. I'm Engeneering. I live in cairo. These are some of my projects.</p>
                    </Tab.Pane>
                    </Tab.Content>
                </Tab.Container>
            </div>
                <img src={image} alt="" className="background-image-right"/>
        </section>
    )
}