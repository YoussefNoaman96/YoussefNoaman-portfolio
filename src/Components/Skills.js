import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>You Can See My Skills Here</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <div style={{ width: "150px", margin: "0 auto 15px auto" }}>
                                <CircularProgressbar
                                    value={90}
                                    text={`90%`}
                                    styles={buildStyles({
                                    pathColor: '#AA367C',
                                    textColor: '#fff',
                                    trailColor: '#333',
                                    })}
                                />
                                </div>
                                <h5>HTML</h5>
                            </div>

                            <div className="item">
                                <div style={{ width: "150px", margin: "0 auto 15px auto" }}>
                                <CircularProgressbar
                                    value={75}
                                    text={`75%`}
                                    styles={buildStyles({
                                    pathColor: '#4A2FBD',
                                    textColor: '#fff',
                                    trailColor: '#333',
                                    })}
                                />
                                </div>
                                <h5>CSS</h5>
                            </div>

                            <div className="item">
                                <div style={{ width: "150px", margin: "0 auto 15px auto" }}>
                                <CircularProgressbar
                                    value={60}
                                    text={`60%`}
                                    styles={buildStyles({
                                    pathColor: '#915cc7ff',
                                    textColor: '#fff',
                                    trailColor: '#333',
                                    })}
                                />
                                </div>
                                <h5>React</h5>
                            </div>

                            <div className="item">
                                <div style={{ width: "150px", margin: "0 auto 15px auto" }}>
                                <CircularProgressbar
                                    value={85}
                                    text={`85%`}
                                    styles={buildStyles({
                                    pathColor: '#103f95ff',
                                    textColor: '#fff',
                                    trailColor: '#333',
                                    })}
                                />
                                </div>
                                <h5>Bootstrap</h5>
                            </div>

                            <div className="item">
                                <div style={{ width: "150px", margin: "0 auto 15px auto" }}>
                                <CircularProgressbar
                                    value={80}
                                    text={`80%`}
                                    styles={buildStyles({
                                    pathColor: '#0a968cff',
                                    textColor: '#fff',
                                    trailColor: '#333',
                                    })}
                                />
                                </div>
                                <h5>Java Script</h5>
                            </div>
                            </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="sdf" src="img/color-sharp.png" alt="Image" /> */}
    </section>
  )
}