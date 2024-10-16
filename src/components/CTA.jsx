import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        A project to contribute towards a Sustainable tommorow! <br className='sm:block hidden' />
        Let’s help our Mother Nature!
      </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  );
};

export default CTA;
