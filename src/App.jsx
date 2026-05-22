import './App.css';
import Navbar from './Navbar';
import WorkflowBox from './WorkflowBox';
import { useState } from 'react';

function App() {

  const sections = ['main', 'about', 'workflow'];
  const [currentSection, setCurrentSection] = useState(0);

  const handleScrollButton = () => {
    if (currentSection < sections.length - 1) {
      const nextIndex = currentSection + 1;
      document
        .getElementById(sections[nextIndex])
        .scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(nextIndex);
    } else {
      document
        .getElementById(sections[0])
        .scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(0);
    }
  };


  const [workflowStep, setWorkflowStep] = useState(0);

  const workflowSteps = [
    "Understand the goals of the project and identify user needs.",
    "Find similar references online for inspiration.",
    "Plan the structure and layout of the interface.",
    "Focus on clarity, accessibility, and usability during the design process.",
    "Develop the front end using HTML, CSS, JavaScript, and React.",
    "Test and refine the interface based on feedback from teammates and users.",
    "Iterate on the design to improve functionality and user experience."
  ];

  const handleWorkflowCheck = (index) => {
    if (index === workflowStep) {
      setWorkflowStep(workflowStep + 1);
    }
  };

  const scrollToSection = (sectionId) => {
  document
    .getElementById(sectionId)
    .scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">

      {/*MAIN*/}
      <section id="main" className="mainsection">

        <div className="top_left">
          <h1 className="name">Raymond Tan</h1>
        </div>

        <div className="top_right">
          <Navbar scrollToSection={scrollToSection} />
        </div>

        <div className="content">

          <div className="NA_content">
            <h2>&lt;h1&gt;</h2>
            <h1>Not Average.</h1>
            <h2>&lt;/h1&gt;</h2>
          </div>

          <div className="NEC_content">
            <h3>&lt;h2&gt;</h3>
            <h2>Not even close.</h2>
            <h3>&lt;/h2&gt;</h3>
          </div>

        </div>

      </section>

      {/* ME 
      
      <section id="me" className="page-section">
        <h1>Me</h1>
      </section>
      */}
      

      {/* ABOUT */}
      <section id="about" className="page-section">
        <div className="about-container">

          <img
            src="/raymond.png.png"
            alt="Raymond Tan"
            className="profile-image"
          />

          <div className="about-text">
            
              <h2> Hello, I'm</h2>
                <h1>Raymond Tan</h1>
             
            <h2> Second Year Software Engineering Student</h2>

            <p>

              Software engineering student at the University of Ottawa,
              passionate about developing practical and innovative software solutions,
              with a strong interest in building full-stack applications and creating seamless user experiences.
              
      
            </p>

            <p>In team settings, 
              I often take responsibility for the user interface and front-end implementation because I enjoy creating layouts, improving visual presentation, 
              and making applications more user-friendly.</p>
          </div>

        </div>
      </section>

      {/* WORKFLOW */}
      <section id="workflow" className="page-section">
        <div className="work_content">
          <h2>&lt;h1&gt;</h2>
          <h1>Workflow</h1>
          <h2>&lt;/h1&gt;</h2>
        </div>

        <div className="workflow-container">
   
            <WorkflowBox
              workflowSteps={workflowSteps}
              workflowStep={workflowStep}
              handleWorkflowCheck={handleWorkflowCheck}
            />
          
        </div>
      </section>

      {/* SCROLL BUTTON*/}
      <div className="scroll-btn" onClick={handleScrollButton}>
        <span
          className={`chevron ${
            currentSection === sections.length - 1 ? 'chevron-up' : ''
          }`}
        />
      </div>

    </div>
  );
}

export default App;