import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "./headerImg.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Link } from 'react-router-dom';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Tech Enthusiast" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <h4 style={{position:'absolute', top: '85px', right:'30px', color:'white'}}>vighneshsunil1998@gmail.com</h4>
      <h4 style={{position:'absolute', top: '140px', right:'230px', color:'white'}}>9739872375</h4>
      <Container >
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Vighnesh`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Tech Enthusiast" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Experienced Front-End Developer with a strong track record in designing and implementing responsive web applications.
Seeking opportunities to leverage my skills and creativity to contribute to innovative projects and further develop my 
expertise.</p>
<br/>
<br/>
<p>Over 1.7 years of experience, I enjoyed taking advantage of awesome new browser features without breaking the 
experience on older browser. I am up to date with IT trends and innovation. I really love to experiment with new 
web technologies, APIs and standards. I write semantic HTML and CSS code that works perfectly on all modern
browsers. I love JavaScript and I know its good parts. I keep a close eye on JavaScript development client side, ES6, user 
interfaces, interaction design, web technologies and web standards. I am skilled to define and maintain well crafted, 
complex and large libraries</p>
                  <Link to='/contact' style={{textDecoration: "none"}}>
                  <button style={{backgroundColor: '#7e46a3'}} onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </Link>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}