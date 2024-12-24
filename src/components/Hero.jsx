import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import black from '../assets/backgrounds/blackbg.png';
import doodle from '../assets/backgrounds/doodle.png';
import doodle1 from '../assets/backgrounds/doodle1.png';
import binary from '../assets/backgrounds/binary.png';
const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
      
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
      
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile"
        >    
        {/* <img src={doodle} alt="world map" class="w-full h-full block " style={{width:'100%'}}/> */}
        <div
          className={`absolute inset-0 sm:top-[100px] top-[150px] 
          lg:top-[100px] xl:top-[150px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}>
            
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>
          
          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}>
              Hi, I'm{' '}
              Shikhara Pagadala
              <span
                className="sm:text-battleGray sm:text-[90px] 
                text-eerieBlack text-[50px] font-mova
                font-extrabold uppercase">
                {/* Shikhara Pagadala */}
              </span>
            </h1>
            
            <p className={`mt-4 text-taupe text-[18px] leading-[30px]` }>
            As an engineer and innovator, I transform complex challenges into practical solutions, inspiring progress with every project.
            Explore my projects and learn more about my journey!
            <br className="sm:block hidden" />
            <div style={{
            display:'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '10px',
            color:'rgba(122,122,122,1)',
            paddingTop:'30px',
            
          }}>
           <a href="mailto:pagadalashikhara@gmail.com">
            <i className="fa-regular fa-envelope fa-2x" style={{ marginRight: '30px' }}></i>
          </a>
          
          <a href="https://www.linkedin.com/in/shikhara-pagadala-ab9506190/">
            <i className="fab fa-linkedin-in fa-2x" style={{ marginRight: '30px' }}></i>
          </a>


          <a href="https://github.com/Shikhara17">
            <i className="fab fa-github fa-2x" style={{ marginRight: '30px' }}></i>
          </a>
    </div>
            </p>
            
           
          </div>
          
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"></div>

          <div> </div>
        </div>

        <div
          className="absolute hidden lg:flex xl:bottom-10 bottom-32  w-full 
          flex justify-center items-center">
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
          
        </div>

        {/* Your image comes here. Feel free to remove image if you don't plan to have one.*/}
        <div style={{width:'100%', alignContent:'right'}}>
        <img src={doodle} alt="world map" class="w-full h-full block " style={{width:'100%'}}/>
          {/* <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[75vw] md:ml-[60vw] xmd:ml-[60vw] 2xl:ml-[83vw]
            sm:h-[90vh] md:h-[70vh] xl:h-[80vh]"
            src={black}
            alt="background"
          /> */}
        </div>
      </section>
    </>
  );
};

export default Hero;
