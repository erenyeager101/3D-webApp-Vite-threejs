import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        I'm a tech enthusiast specializing in programming, Machine Learning, IoT, and Web Development.  <br className='sm:block hidden' />
        Let’s connect!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
