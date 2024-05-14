import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import shop from "../../Assets/Projects/shop.jpeg";
import cert_verify from "../../Assets/Projects/cert_verify.png";
import certi from "../../Assets/Projects/certificate.jpeg";
import ailex from "../../Assets/Projects/ailex.jpeg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cert_verify}
              isBlog={false}
              title="Certificate Verify"
              description="Welcome to our innovative certificate verification platform! With our user-friendly interface, you can now authenticate certificates swiftly by entering a unique code or scanning a QR code. Instant confirmation of validity enhances trust and mitigates the risk of fraudulent credentials. Take advantage of our seamless upload and verification process, along with the added convenience of calculating activity points. Experience hassle-free certificate verification with us!"
              ghLink="https://github.com/vishnuhari17/Certificate_verify"
              demoLink="https://certificate-verify-kappa.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={certi}
              isBlog={false}
              title="Unique Certificate Generator"
              description="Our certificate generation tool automates docx and pdf certificate creation from a template. It generates certificates with QR codes and unique codes that link to the certificate verification page, enhancing authentication capabilities."
              ghLink="https://github.com/vishnuhari17/Certificate-generation.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shop}
              isBlog={false}
              title="Shop Management"
              description="
              Introducing our Python shop management program! Powered by MySQL Python Connector, it efficiently tracks stock, prices, and generates GST-compliant bills for purchases. Ensure smooth operations with accurate inventory management. Note: Requires prior MySQL setup and table creation."
              ghLink="https://github.com/vishnuhari17/Shop_billing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ailex}
              isBlog={true}
              title="AILEX"
              description="Welcome to AILEX: where legal documentation is a breeze. With just a click, draft, review, and customize legal agreements effortlessly. No more searching for templates or worrying about customization. AILEX is your personal legal assistant, clarifying doubts in real-time. Plus, its 'Ambiguity Check' ensures clarity, saving you from disputes. Say hello to simplicity with AILEX."
              demoLink="https://ailex.netlify.app/"
              ghLink="https://ailex.netlify.app/"
            />
          </Col>

    
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
            // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
