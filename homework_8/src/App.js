import React, { useEffect, Component } from 'react';
import './App.css';
import * as ReactBootStrap from "react-bootstrap";
import Aos from "aos"
import "aos/dist/aos.css"
import { BrowserRouter as Router } from 'react-router-dom';
import Route from 'react-router-dom/Route'

{/*organization of the app - this is what gets rendered*/}
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/home" exact render={
            ()=> {
              return (
                <div className="MainContent">
                <Navbar />
                <Hero
                  img="name-hero.png"
                  carrot="My Work"
                  id="hero-name"
                  carrotYes="carrot-down.png"
                />
                <Initials />
                <WorkItem1
                  image="geatwerk.png"
                  title="GE@Work"
                  description1="The summer of 2019, I interned for GE Power and one of my projects was to propose a redesign to their internal employee application. I signed on to this project to practice my skills of translating a well-intended product limited by bad design into a highly enjoyable and useful product. I began by looking at the application in its current state and using it, taking note of things that seemed off to me and ways I felt it could be improved. Then I worked with my boss to define the goals of the redesign to provide direction. I surveyed end users about what they thought about the application in its current state and what they wanted out of it. Through the summer, I created many different iterations of the redesign, testing with users and reworking the best of them. In the end, I had something that I was proud of and presented it to my bosses. Aesthetically, it was cleaner, brighter, and more in line with GE’s design guidelines. Experientially, it had much less superfluous information and was streamlined to the uses the users wanted and the company needed. I was able to take an application that was not useful or usable and create a proposal for an application that would hopefully become an integral part of a GE Power employee’s life."
                />
                <WorkItem2
                  image="uberferplns.png"
                  title="Uber for Planes"
                  description1="This was a class project that I decided to make not only functional, but beautiful. Our goal was to make a website for any service, and we chose a conceptual “Uber for Planes” as a fun thought experiment."
                  description2="The concept was that someone could find a specific type of plane and a certain pilot and select a takeoff location near them. My partner and I made two different modes of use: Pilot and Passenger. These two personas would use the interface in different ways to either post their availability, location, and fleet (Pilot) or to select the service and location desired (Passenger)."
                  description3="While this was mainly a fun project to explore a new form of coding, I decided to try to design the interface in a sleek, dark mood and added orange accents for interest."
                />
                <WorkItem1
                  image="minswpr.png"
                  title="Minesweeper"
                  description1="This was a class project that I decided to make not only functional, but beautiful. My goal was to make a functional Minesweeper game which was the only requirement. However, I decided to spend some time making the interface beautiful, fun, and interactive."
                  description2="As you play, the qute squares turn green to  blend in with the background, revealing the numbers. You can also flag certain boxes, placing a little flag over the white square."
                  description3="When you hit a bomb, the whole screen turns red, dramatically signaling game over."
                />
                <Footer
                  color="green"
                />
                </div>
              );}}/>

          <Route path="/aboutMe" exact render={
            () => {
              return (
                <div className="MainContent">

                <Navbar />

                <Hero
                  img="nice-to-meet-you.png"
                  id="about-pic"
                />

                <TextBlock
                  title="A little about me..."
                  description1="I am a graduate student in the Masters of Human Computer Interaction program at Carnegie Mellon University. I am also a recent graduate of the Honors College at the University of North Carolina at Chapel Hill where earned bachelor’s degrees in Computer Science and Psychology."
                  description2="Through my research and studies in psychology, I worked to understand what factors increase positivity in moments of connection. And through my work and studies in computer science, I gained the tools to be able to implement these factors in the technology we use every day."
                  description3="I am a fast learner and a strong creative, analytic, and visual thinker. I have excellent empathy and interpersonal skills, and I believe these abilities combined with my strong verbal and visual communication and technical programming skills make me an ideal candidate for a user experience designer."
                  description4="The combination of psychology and computer science is ideal for user experience design. As human interaction with technology becomes more and more ubiquitous, it is imperative that those of us creating the digital experience are experts in the impact of these human-computer interactions and design these experiences intentionally to maximize the opportunity for good."
                  description5="I am truly impassioned and excited by solving problems and building beautiful and efficacious products. I am a very creative person moved by beautiful design and aesthetics, and I believe usability is enhanced by intuitive design and beauty."
                />

                <DramaBlock
                  title="My Design Philosophy"
                  paragraph1="I believe that every interaction, whether it be human to human or human to technology, is an opportunity to create positive emotional experiences."
                  paragraph2="​I plan to combine my interests in computer science and psychology to design technology that delights and fosters human wellbeing and potential while being effective and strategic."
                />

                <Footer
                  color="pink"
                />

                </div>
          );}}/>


        </div>
      </Router>
    );
  }
}


{/*bootstrap navbar*/}
function Navbar() {
  return (
    <div className="Nav">
      <ReactBootStrap.Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <ReactBootStrap.Navbar.Brand href="home">Sarah Jessamyn Hand</ReactBootStrap.Navbar.Brand>
      <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className="mr-auto">
      </ReactBootStrap.Nav>

      <ReactBootStrap.Nav>
      <ReactBootStrap.Nav.Link href="home#work">My Work</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="aboutMe">About Me</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="Sarah-Hand-Resume-Fall-2020.pdf" download>Resume</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#Contact">Contact</ReactBootStrap.Nav.Link>
      </ReactBootStrap.Nav>
      </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
}

{/*My Name and project names in hero section*/}
function Hero(props) {
  return (
    <div className="Hero">
      <ReactBootStrap.Container fluid>
        <ReactBootStrap.Row>
          <ReactBootStrap.Col id="hero" sm={12} xs={12}>
          <ReactBootStrap.Image id={props.id} src={props.img} fluid/>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col sm={12} xs={12}>
            <div id="project-names">
              <div className="project-name">{props.carrot}</div>
              <div className="project-name">
              <ReactBootStrap.Image id="carrot-down" src={props.carrotYes}/>
              </div>
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

{/*SVG Animation for the background of the home page*/}
function Initials() {
  return (
    <svg className="b" xmlns="http://www.w3.org/2000/svg" viewBox="0,0,1224,792">
    <path strokeWidth="17" d="M219.508+177.707C219.508+138.434+148.547+107.232+151.372+163.73C153.448+205.254+191.541+244.935+213.684+276.707C262.397+346.599+321.522+418.96+338.308+504.989C344.831+538.422+346.144+579.282+333.649+611.56C309.941+672.806+238.729+721.439+172.337+713.472C155.575+711.461+142.929+702.336+132.737+689.596C94.7895+642.161+138.309+590.035+170.008+552.742C197.643+520.23+232.901+492.523+263.767+463.06C330.457+399.401+395.367+327.317+443.714+248.754C465.005+214.156+503.656+136.996+457.108+103.748C407.762+68.5002+389.725+128.837+392.467+167.224C394.304+192.95+404.443+215.835+412.267+240.018C428.622+290.571+458.315+336.689+483.314+383.277C519.245+450.24+552.361+517.269+574.744+590.013C585.618+625.356+603.908+710.616+557.855+732.107C547.542+736.921+537.051+735.549+526.991+731.525C475.88+711.081+474.898+641.205+496.126+598.748C558.391+474.217+700.716+390.236+740.714+256.907C752.576+217.369+766.766+114.628+709.267+100.254C680.692+93.1098+666.653+127.283+663.844+149.754C656.266+210.378+673.821+274.301+694.126+330.866C752.976+494.805+883.551+606.319+1061.59+606.319" fill="none" strokeLinecap="round" opacity="1" strokeLinejoin="round"/>
    </svg>
  );
}

{/*Reusable component for static project data*/}
function WorkItem1(props) {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <div id="pad">
    <a name="work"></a>
      <ReactBootStrap.Container data-aos="fade-up">
        <ReactBootStrap.Row>
          <ReactBootStrap.Col sm={true} lg={true}>
          <ReactBootStrap.Image className="work-pic" src={props.image} fluid/>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col sm={true} lg={true} className='align-me'>
            <div>
              <h1 className="left-align">{props.title}</h1>
              <p className="left-align">{props.description1}</p>
              <p className="left-align">{props.description2}</p>
              <p className="left-align">{props.description3}</p>
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

function WorkItem2(props) {
  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);
  return (
    <div id="pad">
      <ReactBootStrap.Container data-aos="fade-up">
        <ReactBootStrap.Row>
          <ReactBootStrap.Col sm={true} lg={true} className='align-me'>
            <div>
              <h1 className="left-align">{props.title}</h1>
              <p className="left-align">{props.description1}</p>
              <p className="left-align">{props.description2}</p>
              <p className="left-align">{props.description3}</p>
            </div>
          </ReactBootStrap.Col>
          <ReactBootStrap.Col sm={true} lg={true}>
            <ReactBootStrap.Image className="work-pic" src={props.image} fluid/>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

function Footer(props) {
  return (
    <div id={props.color}>
    <a name="Contact"></a>
      <h1>Hey! Let's get in touch.</h1>

      <h2>
        <a href="https://www.linkedin.com/in/sarahjessamynhand" className="link">
          <ReactBootStrap.Image className="contact-pic" src="linkedin.png"/>
           Connect with me
        </a>
      </h2>

      <h2>
        <a href="https://www.instagram.com/sarahjessamyn/" className="link">
         <ReactBootStrap.Image className="contact-pic" src="insta.png"/>
          @sarahjessamyn
        </a>
      </h2>

      <h2>
        <ReactBootStrap.Image className="contact-pic" src="email.png"/>
         sarah.jessamyn.hand@gmail.com
      </h2>
      <br></br>
      <br></br>
      <h1>Sarah Jessamyn Hand</h1>
    </div>
  )
}

function TextBlock(props) {
  return (
    <div className="text">
      <ReactBootStrap.Container >
        <ReactBootStrap.Row>
          <ReactBootStrap.Col sm={true} lg={true}>
            <h1 className="left-align">{props.title}</h1>
            <p className="left-align">{props.description1}</p>
            <p className="left-align">{props.description2}</p>
            <p className="left-align">{props.description3}</p>
          </ReactBootStrap.Col>

          <ReactBootStrap.Col sm={true} lg={true}>
            <div id="pad2">
              <p className="left-align">{props.description4}</p>
              <p className="left-align">{props.description5}</p>
              <p className="left-align">{props.description6}</p>
            </div>
          </ReactBootStrap.Col>
        </ReactBootStrap.Row>
      </ReactBootStrap.Container>
    </div>
  );
}

function DramaBlock(props) {
  return (
    <div id="drama-block">
      <h1 id="drama-title">{props.title}</h1>
      <h3 id="drama-p">{props.paragraph1}</h3>
      <h3 id="drama-p">{props.paragraph2}</h3>
    </div>
  );
}



export default App;
