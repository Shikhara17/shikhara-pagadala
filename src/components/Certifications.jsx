import React from 'react';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';
import { motion } from 'framer-motion';
import udemy from '../assets/icons/udemy.png';
import google from '../assets/icons/Google.png'
import uom from '../assets/icons/UniversityOfMichigan.png'
import cisco from '../assets/icons/cisco.png';
import azure from '../assets/icons/azure.png';
import ucla from '../assets/icons/UCLA.png';
import ucsd from  '../assets/icons/UCSD.png';
import dlai from  '../assets/icons/deepLearningAI.png';
import aws from '../assets/icons/AWS.png';

const stylesInline = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '10px',
    padding: '20px',
    justifyContent: 'center',
  },
  smallCard: {
    height: '200px',
    backgroundColor: 'rgba(244,244,246,1)',
    borderRadius: '40px',
    display: 'block',
    placeContent: 'center',
    textAlign:'center',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#333',
    padding: '10px',
    marginBottom:'10px',
    marginLeft:'2px',
    marginRight:'2px',
    marginTop:'10px'
  },
  mediumCard: {
    height: '300px',
    backgroundColor: 'rgba(244,244,246,1)',
    borderRadius: '40px',
    display: 'flex',
    flexDirection:'column',
    width:'100%',
    alignItems: 'center',
    textAlign:'center',
    justifyContent: 'center',
    color: '#333',
    fontSize: '18px',
    padding: '15px',
    margin:'2px',
    marginBottom:'15px',
    marginTop:'10px',
  },
  largeCard: {
    height: '400px',
    backgroundColor: 'rgba(244,244,246,1)',
    borderRadius: '40px',
    display: 'flex',
    flexDirection:'column',
    width:'100%',
    alignItems: 'center',
    textAlign:'center',
    justifyContent: 'center',
    color: '#333',
    fontSize: '20px',
    padding: '20px',
    margin:'2px',
    marginTop:'10px',
    marginBottom:'15px',
  },

  title: {
    marginTop:'15px',
    marginBottom: '8px',
    fontSize:'16px',
    // fontWeight: 'bold',
    alignItems:'center',
    textAlign:'center',
    color:'#1f1f1f'
  },
  icon: {
    fontSize:'15px',
    color:'#d4d4d4'
  },
  credLink: {
    marginBottom: '15px',
    fontSize:'2px',
    alignItems:'center'
  },
  img:{
    width:'100%',
    textAlign:'center',
  }
};

const Certifications = () => {
  const getCardStyle = (type) => {
    switch (type) {
      case 'small': return  stylesInline.smallCard;
      case 'medium': return stylesInline.mediumCard;
      case 'large': return stylesInline.largeCard;
      default: return stylesInline.smallCard;
    }
  };

  return (
    <>
    {/* <div style={styles.container}>
      {cards.map((card) => (
        <div key={card.id} style={getCardStyle(card.type)}>
          {card.label}
        </div>
      ))}
    </div> */}
    
     <div className="-mt-[6rem]">
    <motion.div style={{paddingTop:'30px'}}
    // variants={textVariant()}
    >
        <p className={`${styles.sectionSubText} `}>my</p>
        <h2 className={`${styles.sectionHeadTextLight}`}>Certifications.</h2>
    </motion.div>
      <div className="w-full flex">
        <motion.p
        //   variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
            These are my certifications that highlight my commitment to professional growth and 
            eagerness to learn new technologies. Click on the icons for more details about each qualification.
        </motion.p>
      </div>
     
    <div style={stylesInline.container}>
        <div>
            <div key='1' style={getCardStyle('small')} >
                <a href='https://coursera.org/share/e67cd116593e8a36176048280819fd9b'><img src={google}
                    alt="google"
                    style={stylesInline.img} 
                    className='object-contain w-12 h-12'
                  /></a>
                <h1 style={stylesInline.title}>Operating Systems</h1>
                
            </div>  
            <div key='2' style={getCardStyle('small')}>
            <a href='https://coursera.org/share/e2cf403602de315c35c94829181ad699'><img
                    src={uom}
                    alt="University of Michigan"
                    style={stylesInline.img} 
                    className='w-16 h-16 object-contain'
                  /></a>
            <h1 style={stylesInline.title}>Python Data Structures</h1>
            </div>  
            <div key='2' style={getCardStyle('small')}>
                <a href='https://coursera.org/share/6224046477a4b1863694ebd02c101e11'>
                 <img
                    src={ucsd}
                    alt="University of SanDiego"
                    style={stylesInline.img} 
                    className='w-16 h-16 object-contain'
                  />
                  </a>
                <h1 style={stylesInline.title}> Internet of Things</h1>
            </div>  
        </div>
        <div>
            <div key='1' style={getCardStyle('small')}>
                <a href='https://drive.google.com/file/d/1p4rgEAjtVohCPLunVH5AIbU5KEWJRvhD/view?usp=sharing'>
                <img
                    src={cisco}
                    alt="Cisco"
                    style={stylesInline.img} 
                    className='w-16 h-16 object-contain'
                  />
                  </a>
                <h1 style={stylesInline.title}>Programming in Python</h1>
                
            </div>  
            <div key='2' style={getCardStyle('small')}>
                <a href='https://coursera.org/share/c666956587d960bce1fd0af1dbc58703'>
                <img
                    src={dlai}
                    alt="DeepLearning.ai"
                    style={stylesInline.img} 
                    className='w-16 h-16 object-contain'
                  />
                  </a>
                <h1 style={stylesInline.title}>Artificial Intelligence</h1>
            </div>  
            <div key='2' style={getCardStyle('small')}>
                <a href='https://drive.google.com/file/d/1XiSIlTXUew2C-z3-JCJb9kMp2qNbxxgx/view?usp=sharing'>
                <img
                    src={udemy}
                    alt="udemy"
                    style={stylesInline.img} 
                    className='w-16 h-16 object-contain'
                  />
                  </a>
                <h1 style={stylesInline.title}>Webdevelopment </h1>
            </div>  
        </div>

        <div>
        <div key='3' style={getCardStyle('medium')}>
            <a href='https://learn.microsoft.com/api/credentials/share/en-us/ShikharaPagadala-1744/C90FB100798F01B3?sharingId=95085DF9FC0C5A78'>
            <img
                    src={azure}
                    alt="azure"
                    style={stylesInline.img} 
                    className='object-contain'
                  />
            </a>
            <h1 style={stylesInline.title}>AZ-900 Microsoft Azure Fundamentals</h1>
        </div> 
        <div key='3' style={getCardStyle('medium')}>
             {/* <img
                    src={ucla}
                    alt="University of California"
                    style={stylesInline.img} 
                    className=' object-contain'
                  />
            <h1 style={stylesInline.title}>Interfacing with the Arduino</h1> */}
            
            <img
                    src={aws}
                    alt="AWS Cloud Practitioner"
                    style={stylesInline.img} 
                    className='object-contain'
                  />
            
                <h1 style={stylesInline.title}>AWS Cloud Practitioner</h1>
            
        </div>

        </div>
        <div>
        <div key='3' style={getCardStyle('large')}>
        <a href='https://coursera.org/share/df5a8e8ef27b7218779c4a406a120ccb'>
                <img
                    src={ucla}
                    alt="University of California"
                    style={stylesInline.img} 
                    className='object-contain'
                  />
                </a>
                <h1 style={stylesInline.title}>The Arduino Platform and C Programming</h1>
        </div> 
        <div key='2' style={getCardStyle('small')}>
        <a href='https://coursera.org/share/c169dc9d3948b8eca98f51c4a6c55bdb'>
                <img
                    src={google}
                    alt="Google"
                    style={stylesInline.img} 
                    className='w-12 h-12 object-contain'
                  />
                  </a>
                <h1 style={stylesInline.title}>Technical Support Fundamentals</h1>
        </div>  
        </div>

        <div>
        <div key='2' style={getCardStyle('small')}>
        <a href=''>
                <img
                    src={udemy}
                    alt="udemy"
                    style={stylesInline.img} 
                    className='w-16 h-16 object-contain'
                  />
                  </a>
            <h1 style={stylesInline.title}>Java web services and RESTful API with Spring Boot</h1>
        </div>  
        <div key='3' style={getCardStyle('large')}>
        <a href='https://coursera.org/share/64117d411aa6d40b9842e509ad6632d9'>
            <img
                    src={google}
                    alt="Google"
                    style={stylesInline.img} 
                    className='w-16 h-16 object-contain'
                  />
                  </a>
            <h1 style={stylesInline.title}>  Computer Networking</h1>
        </div> 
        </div>
        
    </div>
   </div>
    </>
  );
};

export default SectionWrapper(Certifications, 'certifications');
