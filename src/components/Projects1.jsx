import React, { useRef,useState,useEffect } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

import git from '../assets/icons/github.png';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
  techStack,
}) => {
  return (
    
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer card-shadow`}
      onClick={() => handleClick(id)} style={{backgroundColor:'rgb(10, 10, 10)'}}>
         <div
          
        className="absolute top-0 left-0 z-10 bg-jetLight
      h-full w-full opacity-[0.5] rounded-[24px]" style={{backgroundColor:'rgb(10, 10, 10)'}}></div>
       <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      
      {active !== id ? (
          <div className="flex items-center justify-start pr-[4.5rem]">
            <h3
              className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
          whitespace-nowrap sm:text-[27px] text-[18px] text-timberWolf tracking-[1px]
          absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
          leading-none z-20" style={{color:'white'}}>
              {name}
            </h3>
          </div>
        ) : (
          <>
          <style>
          {`
                 .scrollable-div {
                  height: 50px; /* Fixed height to create potential for overflow */
                  overflow-y: scroll; /* Always shows vertical scrollbar if there's overflow */
                  border-radius: 10%;
              }
              
              /* Styling the scrollbar to make it more noticeable */
              .scrollable-div::-webkit-scrollbar {
                  width: 6px; /* Makes the scrollbar wider and more visible */
                  // background-color: #f0f0f0;
                  height:'10px';
                  border-radius: 40%;
              }
              
              .scrollable-div::-webkit-scrollbar-thumb {
                  background-color:#6cd56c;
                  border-radius: 3px;
                  // border: 3px solid #f0f0f0;
              }
              
              .scrollable-div::-webkit-scrollbar-thumb:hover {
                  background-color: #a8a8a8;
              }
              
                `}
      </style>
            <div 
              className="absolute bottom-0 p-8 justify-start w-full 
              flex-col bg-[rgba(122,122,122,0.5)] rounded-b-[24px] z-20 scrollable-div"  style={{height:'80%',overflowY: 'scroll',color: 'rgba(244,244,246,1)', backgroundColor:'rgb(10, 10, 10)', backdropFilter:'blur(50px'}} >
              <div className="absolute inset-0 flex justify-end m-3">
                <div
                  onClick={() => window.open(repo, '_blank')}
                  className="bg-night sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                    flex justify-center items-center cursor-pointer
                    sm:opacity-[0.9] opacity-[0.8]" >
                  <img 
                    src={git}
                    alt="source code"
                    style={{ cursor: 'pointer' }} 
                    className="w-4/5 h-4/5 object-contain"
                  />
                </div>
              </div>
              <div>
              <h2
                className="font-bold sm:text-[32px] text-[24px] 
                text-timberWolf uppercase font-beckman sm:mt-0 -mt-[1rem]" style={{color:'#6cd56c'}}>
                {name}
              </h2>
              <div>
              <p
                className="text-silver sm:text-[14px] text-[12px] 
                max-w-3xl sm:leading-[24px] leading-[18px]
                font-poppins tracking-[1px]" style={{color:'white'}}>
                {description}
              </p>
              <p
                className="text-silver sm:text-[12px] text-[10px] 
                max-w-3xl sm:leading-[22px] leading-[16px]
                font-poppins tracking-[1px]" style={{color:'#6cd56c'}}>
                <strong >Tech Stack : </strong>{techStack}
              </p>
              </div>
              <button
                className="live-demo flex justify-between 
                sm:text-[16px] text-[14px] text-timberWolf 
                font-bold font-beckman items-center py-5 pl-2 pr-3 
                whitespace-nowrap gap-1 sm:w-[138px] sm:h-[50px] 
                w-[125px] h-[46px] rounded-[10px] glassmorphism 
                sm:mt-[22px] mt-[16px] hover:bg-battleGray 
                hover:text-eerieBlack transition duration-[0.2s] 
                ease-in-out"
                onClick={() => window.open(demo, '_blank')}
                onMouseOver={() => {
                  document
                    .querySelector('.btn-icon')
                    .setAttribute('src', pineappleHover);
                }}
                onMouseOut={() => {
                  document
                    .querySelector('.btn-icon')
                    .setAttribute('src', pineapple);
                }}>
                <img
                  src={pineapple}
                  alt="pineapple"
                  className="btn-icon sm:w-[34px] sm:h-[34px] 
                    w-[30px] h-[30px] object-contain"
                />
                LIVE DEMO
              </button>
              </div>
            </div>
          </>
        )}
    </motion.div>
  );
};

const Projects = () => {

  const [active, setActive] = useState('2');
  // const [filter, setFilter] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('');
  const [techFilter, setTechFilter] = useState('');
  const [filteredProjects, setFilteredProjects] = useState(projects); // Initialize with all projects

  useEffect(() => {
    console.log('Category Filter:', categoryFilter);
    console.log('Tech Filter:', techFilter);

    const filtered = projects.filter(project => {
      const matchesCategory = categoryFilter === '' || project.category === categoryFilter;
      const matchesTech = techFilter === '' || project.techStack.includes(techFilter);
      return matchesCategory && matchesTech;
    });

    console.log('Filtered Projects:', filtered);
    setFilteredProjects(filtered);
    if (!filtered.length) {
      console.error('No projects found after filter. Check data integrity and filter logic.');
      setFilteredProjects(projects); 
    }
  }, [categoryFilter, techFilter]); 
  return (
    <div className="-mt-[6rem]" style={{backgroundColor:"rgba(244,244,246,1)", color:"#1f1f1f"}}>  
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Case Studies</p>
          <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
        </motion.div>
              <div className="w-full flex">
          <motion.p
            variants={fadeIn('', '', 0.1, 1)}
            className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
            These projects demonstrates my problem-solving skills and technical expertise
            through practical examples. Each project is accompanied by a concise description,
              alongside links to the source code and live demonstrations, where applicable.
              You are invited to explore these projects by category or technology stack, 
              which highlight my ability to navigate complex challenges, adapt seamlessly 
              across various technologies, and manage projects with precision. 
          </motion.p>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row', // Elements laid out horizontally
            justifyContent: 'flex-end', // Aligns children towards the right side of the container
            alignItems: 'center', // Vertically centers items
            flexWrap: 'wrap', // Allows items to wrap onto the next line
            marginTop: '20px', // Adds spacing towards the top
            gap: '10px' // Adds space between the flex items
            
        }}
          >
          <select onChange={e => setCategoryFilter(e.target.value)} value={categoryFilter} style={{ 
            margin: '0 10px', // Margin around the select for spacing
            color: '#fff', // Text color
            backgroundColor: '#333', // Background color
            borderRadius: '8px',
            padding: '8px 12px' // Padding inside the select
        }}>
          <option value="">All</option>
          <option value="Frontend">Frontend</option>
          <option value="Data Engineer">Data Engineer</option>
          <option value="React">React</option>
          <option value="Python">Python</option>
        </select>
          <select onChange={e => setTechFilter(e.target.value)} value={techFilter} style={{ 
            margin: '0 10px', // Margin around the select for spacing
            color: '#fff', // Text color
            backgroundColor: '#333', // Background color
            padding: '8px 12px', // Padding inside the select
            borderRadius: '12px',
        }}>
            <option value="">All Techs</option>
            <option value="React">React</option>
            <option value="Python">Python</option>
          </select>
          </div>
          <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show" >
            
            {filteredProjects.length ? (
          <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5" style={{display:'flex',flexWrap:'wrap',displayDirection:'column',width:'95%'}}>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                index={index}
                {...project}
                active={active}
                handleClick={setActive}
              />
            ))}
          
          </div>
          ) : (
            <p>No projects match the selected filters.</p>
          )}
        </motion.div>  
    </div>
  );
};

// export default SectionWrapper(Projects, 'projects') ;
