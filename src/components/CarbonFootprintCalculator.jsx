import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: #fff;
  background: linear-gradient(135deg, #1e90ff, #000080);
  border-radius: 15px;
  max-width: 800px;
  margin: auto;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
`;

const Header = styled.h1`
  font-size: 2.5rem;
  color: #fdfdfd;
  margin-bottom: 1rem;
  font-weight: bold;
`;

const SubHeader = styled.h2`
  font-size: 1.2rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  color: #c9d1d9;
`;

const Section = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  text-align: left;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #00ffff;
  margin-bottom: 0.5rem;
`;

const Link = styled.a`
  color: #ffd700;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const Bio = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 800 },
  });

  const slideUp = useSpring({
    from: { opacity: 0, transform: 'translateY(40px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <BioContainer>
      <animated.div style={fadeIn}>
        <Header>Hi, I'm Kunal Sonne!</Header>
        <SubHeader>
          Tech enthusiast | B.Tech @ VIT Pune | Passionate about coding, ML, IoT & Web Development
        </SubHeader>
      </animated.div>

      <animated.div style={slideUp}>
        <Section>
          <SectionTitle>About Me</SectionTitle>
          <p>
            I'm a tech enthusiast with a focus on programming, Machine Learning, Web Development, and IoT. My projects range from heart disease detection using ML algorithms to real-time crowd monitoring systems.
            When I'm not coding, I enjoy anime, movies, and writing about the latest in tech trends.
          </p>
        </Section>

        <Section>
          <SectionTitle>Projects</SectionTitle>
          <p>
            <strong>Heart Disease Detection:</strong> Machine learning-based project with 88% accuracy using Random Forest, aiming for higher accuracy with a GANFIS hybrid model.{' '}
            <Link href="https://github.com/erenyeager101/Heart_Disease_Detection" target="_blank">GitHub Repository</Link>
          </p>
          <p>
            <strong>Wellness LinkHub:</strong> A hospital management portal for better patient care.{' '}
            <Link href="https://github.com/erenyeager101/Wellness_LinkHub" target="_blank">GitHub Repository</Link>
          </p>
          <p>
            <strong>Crowd Monitoring System:</strong> Real-time crowd tracking app with color-coded maps, peak & average data.{' '}
            <Link href="https://github.com/erenyeager101/Crowd_monitoring" target="_blank">GitHub Repository</Link>
          </p>
          <p>
            <strong>Pizza Buying dApp:</strong> A decentralized app for buying pizza with cryptocurrency. Built with Solidity, Node.js, and React.{' '}
            <Link href="#" target="_blank">GitHub Repository</Link>
          </p>
        </Section>

        <Section>
          <SectionTitle>Blog</SectionTitle>
          <p>
            I write about the latest trends in web development frameworks like SvelteKit, GraphQL, and Apollo.{' '}
            <Link href="#">Check Out My Blog</Link>
          </p>
        </Section>

        <Section>
          <SectionTitle>Get In Touch</SectionTitle>
          <p>Email: <Link href="mailto:sonnekunal2@gmail.com">sonnekunal2@gmail.com</Link></p>
          <p>GitHub: <Link href="https://github.com/erenyeager101" target="_blank">Kunal Sonne</Link></p>
          <p>LinkedIn: <Link href="#" target="_blank">Kunal Sonne</Link></p>
          <p>Let's connect if you're interested in collaborations or just want to chat about tech!</p>
        </Section>
      </animated.div>
    </BioContainer>
  );
};



export default CarbonFootprintCalculator;
