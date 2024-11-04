import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
      Ada proyek yang ingin diwujudkan? <br className='sm:block hidden' />
      Mari kita bangun bersama! 🚀
      </p>
      <Link to='/contact' className='btn'>
        Kontak
      </Link>
    </section>
  );
};

export default CTA;
