import React from 'react';
import IconButton from '@mui/material/IconButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { styled } from '@mui/material/styles';

const StyledIconButton = styled(IconButton)({
  color: '#fff',
  backgroundColor: '#000', // Uniform black background
  '&:hover': {
    backgroundColor: '#333' // Slightly lighter black on hover
  },
  margin: '0 5px',
});

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
        <p>Most of my projects are on github, so feel free to check them out!</p>
      </section>
      <section>
        <h3>Education</h3>
        <ul>
          <li><strong>University of Bucharest</strong> - Master's Degree in Artificial Intelligence (2024-2025)</li>
          <li><strong>University of Bucharest</strong> - Bachelor's Degree in Computer Science (2020-2024)</li>
        </ul>
      </section>
      <section>
        <h3>Work Experience</h3>
        <ul>
          <li><strong>QuantCo</strong> - Software Engineer Intern (2023-2024)</li>
          <li><strong>UiPath</strong> - Machine Learning Intern (2022-2023)</li>
          <li><strong>Huawei</strong> - Software Engineer Intern (2021-2022)</li>
        </ul>
      </section>
    </div>
  );
}

export default MainContent;
