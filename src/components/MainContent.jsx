import React from 'react';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(IconButton)({
  color: '#fff',
  backgroundColor: '#000',
  '&:hover': {
    backgroundColor: '#333'
  },
  margin: '0 5px',
});

const PROJECTS = [
  {
    title: "BERT XAI",
    description: "Hierarchical Linguistic Knowledge in BERT. A Layer-wise Probing Analysis",
    link: "/docs/bert-pipeline.pdf"
  },
  {
    title: "Better Call Lora",
    description: "Low Rank Adaptation on a fixed VRAM budget",
    link: "/docs/better-call-lora.pdf"
  },
  {
    title: "RAG for Reserach Papers",
    description: "Retrieval Augmented Generation variants for Research Papers QA",
    link: "/docs/rag.pdf"
  },
  {
    title: "Extended Isolation Forest",
    description: "Exploring the limits of Isolation Forest for Anomaly Detection",
    link: "/docs/eif.pdf"
  }
]

const WORK_EXPERIENCE = [
  {
    company: "Databricks",
    role: "Software Engineer Intern",
    year: "Summer 2025",
    location: "Amsterdam, Netherlands"
  },
  {
    company: "QuantCo",
    role: "Software Engineer Intern",
    year: "Summer 2024",
    location: "Berlin, Germany"
  },
  {
    company: "UiPath",
    role: "Machine Learning Intern",
    year: "Summer 2023",
    location: "Bucharest, Romania"
  },
  {
    company: "Huawei",
    role: "Software Engineer Intern",
    year: "Summer 2022",
    location: "Tampere, Finland"
  }
]

const MainContent = () => {
  return (
    <div>
      <header style={{ textAlign: 'center' }}>
        <h1>Robert Trifan</h1>
        <div>
          <StyledIconButton aria-label="email" component="a" href="mailto:trifangrobert@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </StyledIconButton>
          <StyledIconButton aria-label="LinkedIn" component="a" href="https://www.linkedin.com/in/robert-trifan">
            <FontAwesomeIcon icon={faLinkedin} />
          </StyledIconButton>
          <StyledIconButton aria-label="GitHub" component="a" href="https://github.com/trifangrobert">
            <FontAwesomeIcon icon={faGithub} />
          </StyledIconButton>
        </div>
      </header>
      <section>
        <h3>About Me</h3>
        <p>
          I'm currently pursuing a Master's Degree in Artificial Intelligence at the University of Bucharest.
        </p>
        <p>
          I like playing around with tools and understanding how they work under the hood, especially in fields like machine learning and software engineering.
        </p>
      </section>
      <section>
        <h3>Projects</h3>
        <ul>
          {PROJECTS.map((project) => (
            <li key={project.title}>
              <a href={project.link} target="_blank" rel="noopener noreferrer">{project.title}</a> - {project.description}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h3>Education</h3>
        <ul>
          <li><strong>University of Bucharest</strong> - Master's Degree in Artificial Intelligence (2024-2026)</li>
          <li><strong>University of Bucharest</strong> - Bachelor's Degree in Computer Science (2021-2024)</li>
        </ul>
      </section>
      <section>
        <h3>Work Experience</h3>
        <ul>
          {WORK_EXPERIENCE.map((job) => (
            <li key={job.company}>
              <strong>{job.company}</strong> - {job.role} ({job.year}) • {job.location}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default MainContent;
