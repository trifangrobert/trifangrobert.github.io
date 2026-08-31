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

const COMPETITIONS = [
  {
    category: "Hackathon",
    results: [
      { year: "2026", description: "1st place — LSEG Quant Challenge" }
    ]
  },
  {
    category: "Physics Olympiad",
    results: [
      { year: "2017", description: "Gold medal — Regional Stage" },
      { year: "2017", description: "Bronze medal — National Stage" },
      { year: "2016", description: "Silver medal — National Stage" }
    ]
  },
  {
    category: "Competitive Programming",
    results: [
      { year: "2022", description: "Qualified to National Stage — ACM ICPC" },
      { year: "2017-2021", description: "Qualified to National Stage (yearly)" }
    ]
  },
  {
    category: "Mathematics Olympiad",
    results: [
      { year: "2021", description: "Qualified to National Stage" }
    ]
  }
]

const WORK_EXPERIENCE = [
  {
  company: "Google",
    role: "Software Engineer Intern",
    year: "Summer 2026",
    location: "Paris, France"
  },
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
          I'm currently a software engineering intern at Google, part of YouTube, working on improving costs/metrics for Video Understanding.
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
      <section>
        <h3>Competitions & Awards</h3>
        {COMPETITIONS.map((comp) => (
          <div key={comp.category}>
            <strong>{comp.category}</strong>
            <ul>
              {comp.results.map((r) => (
                <li key={r.year + r.description}>{r.year} — {r.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

    </div>
  );
}

export default MainContent;
