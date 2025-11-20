import {useState , useEffect} from 'react';
import {Container , Row , Col} from 'react-bootstrap';
import headerImg from '../assets/img/header-img.svg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import WOW from 'wowjs';
import 'animate.css';


export const Banner = () => {
    const [loopNum , setLoopNum] = useState(0);
    const [isDeleting , setIsDeleting] = useState(false);
    const [text , setText] = useState('');
    const [delta , setDelta] = useState(150 - Math.random() * 50); //time
    const [index , setIndex] = useState(1);

    const toRotate = ["Web Developer" , "FrontEnd Developer" , "React JS Developer"];
    const period = 1000;

    useEffect(() => {
        new WOW.WOW().init();
    }, []);

    useEffect (() => {
        let ticker = setInterval(() => {
            tick();
        } , delta);

        return () => {clearInterval(ticker)}
    } , [text])
    
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0 , text.length -1) : fullText.substring(0 , text.length + 1);

        setText(updatedText);
        
        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex -1);
            setDelta(period);
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(150);
        }else{
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="wow fadeIn" data-wow-duration="1.5s">
                        <div className="banner-text">
                        <span className="tagline">Welcome All In My Portfolio</span>
                        <h1 className="title-line">
                            Hi! I'm Youssef Mohamed Noaman,<span
                                className="txt-rotate"
                                data-typeriod="1000"
                                data-rotate='["Web Developer", "FrontEnd Developer", "React JS Developer"]'
                            >
                                <span className="wrap">{text}</span>
                            </span>
                        </h1>
                        <p>
                            Front-End React Developer with experience in building fast and responsive websites.
                        </p>
                        <button 
                            className="connect" 
                            onClick={() => {
                                const contactSection = document.getElementById("connect");
                                if(contactSection){
                                    contactSection.scrollIntoView({ behavior: "smooth" });
                                }
                            }}
                        >
                            <span>Let's Connect <ArrowRightCircle size={25} /></span>
                        </button>
                        </div>
                    </Col>

                    <Col xs={12} md={6} xl={5} className="wow zoomIn" data-wow-duration="1.5s">
                        <img src={headerImg} alt="Header Img" className="header-img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}