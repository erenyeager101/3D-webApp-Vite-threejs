import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: #fff;
  background: linear-gradient(135deg, #1a1a2e, #16213e);
  min-height: 100vh;
  box-sizing: border-box;
`;

const Header = styled(animated.h1)`
  font-size: 3rem;
  color: #00d4ff;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const SubHeader = styled(animated.h2)`
  font-size: 1.5rem;
  color: #c9d1d9;
  margin-bottom: 2rem;
  text-align: center;
  max-width: 700px;
`;

const FloatingCardsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
`;

const Card = styled(animated.div)`
  background: linear-gradient(135deg, #16213e, #1a1a2e);
  color: #fff;
  border: 2px solid #00d4ff;
  border-radius: 15px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.3);
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: scale(1.1);
  }
`;

const Section = styled(animated.div)`
  max-width: 800px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  text-align: center;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
`;

const SectionTitle = styled.h3`
  font-size: 1.8rem;
  color: #00d4ff;
  margin-bottom: 1rem;
`;

const Link = styled.a`
  color: #ffd700;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const About = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const slideUp = useSpring({
    from: { transform: 'translateY(50px)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    config: { duration: 800 },
  });

  const cardsAnimation = useSpring({
    from: { transform: 'scale(0.8)', opacity: 0 },
    to: { transform: 'scale(1)', opacity: 1 },
    config: { duration: 500 },
  });

  return (
    <PageContainer>
      <Header style={fadeIn}>Hi, I'm Kunal Sonne!</Header>
      <SubHeader style={fadeIn}>
        Tech enthusiast | B.Tech @ VIT Pune | Passionate about coding, ML, IoT, & Web Development
      </SubHeader>

      <FloatingCardsContainer>
        <Card style={cardsAnimation} onClick={() => window.open('https://github.com/erenyeager101', '_blank')}>
          GitHub
        </Card>
        <Card style={cardsAnimation} onClick={() => window.open('https://www.linkedin.com/in/kunal-sonne-719748322/', '_blank')}>
          LinkedIn
        </Card>
        <Card style={cardsAnimation} onClick={() => window.open('mailto:sonnekunal2@gmail.com', '_blank')}>
          Connect
        </Card>
      </FloatingCardsContainer>

      <Section style={slideUp}>
        <SectionTitle>About Me</SectionTitle>
        <p>
          I'm a tech enthusiast specializing in programming, Machine Learning, IoT, and Web Development. My experience spans various projects, 
          from heart disease detection systems to real-time crowd monitoring solutions. I thrive on solving challenges through technology and constantly 
          learning to push the boundaries of what's possible.
        </p>
      </Section>

      <Section style={slideUp}>
        <SectionTitle>Projects</SectionTitle>
        <p>
          <strong>Heart Disease Detection:</strong> ML project achieving 88% accuracy with Random Forest.{' '}
          <Link href="https://github.com/erenyeager101/Heart_Disease_Detection" target="_blank">GitHub Repository</Link>
        </p>
        <p>
          <strong>Wellness LinkHub:</strong> A hospital management system.{' '}
          <Link href="https://github.com/erenyeager101/Wellness_LinkHub" target="_blank">GitHub Repository</Link>
        </p>
        <p>
          <strong>Crowd Monitoring System:</strong> Real-time tracking with intelligent insights.{' '}
          <Link href="https://github.com/erenyeager101/Crowd_monitoring" target="_blank">GitHub Repository</Link>
        </p>
        <p>
          <strong>Pizza Buying dApp:</strong> Decentralized app for pizza orders.{' '}
          <Link href="#" target="_blank">GitHub Repository</Link>
        </p>
      </Section>

      <Section style={slideUp}>
        <SectionTitle>Get In Touch</SectionTitle>
        <p>
          Email: <Link href="mailto:sonnekunal2@gmail.com">sonnekunal2@gmail.com</Link>
        </p>
        <p>
          GitHub: <Link href="https://github.com/erenyeager101" target="_blank">erenyeager101</Link>
        </p>
        <p>
          LinkedIn: <Link href="https://www.linkedin.com/in/kunal-sonne-719748322/" target="_blank">Kunal Sonne</Link>
        </p>
      </Section>
    </PageContainer>
  );
};

export default CarbonFootprintCalculator;
