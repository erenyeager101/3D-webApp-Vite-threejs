import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, Welcome to my portfolio!
        <span className='font-semibold mx-2 text-white'>Kunal</span>
        👋
        <br />
        I am undergraduate student @ VIT,Pune. A tech enthusiast with strong intrest in Machine learning and Web development.
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
          Explore my projects <br /> and if you want to contribute then lets connect.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          See deatiled profile
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Discover my latest initiative focused on building efficient solutions that empower individuals <br />  to adopt technology-driven lifestyles.
        </p>
        

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Visit Now
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
        Connect Share Learn and Stay motivated!
      </p>

      {/* <Link to='/contact' className='neo-brutalism-white neo-btn'>
        Let's talk
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link> */}
    </div>
    );
  }

  return null;
};

export default HomeInfo;
