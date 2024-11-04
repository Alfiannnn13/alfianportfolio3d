import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
        Hi, Saya
        <span className='font-semibold mx-2 text-white'>Alfian</span>
        
        <br />
        Junior Programmer ☕
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
        Pengalaman dan keterampilan yang saya dapatkan <br />  melalui kursus sertifikasi.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Selengkapnya
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center sm:text-xl'>
        Berhasil menyelesaikan berbagai proyek.  <br /> Ingin melihat hasilnya?
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Lihat portfolio saya
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
      <p className='font-medium sm:text-xl text-center'>
      Butuh proyek yang diselesaikan atau mencari pengembang? <br/> 
      </p>

      <Link to='/contact' className='neo-brutalism-white neo-btn'>
      Hubungi Saya 🤙
        <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
      </Link>
    </div>
    );
  }

  return null;
};

export default HomeInfo;
