import { motion } from 'framer-motion';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { fadeIn,textVariant } from '../utils/motion';
import React, { useState, useEffect } from 'react';
const Tech = ({index}) => {
  // Helper to capitalize category names
  const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'start', // Align items at the start of the flex line
    margin: '20px',
    gap: '10px', // Ad
  };

  const cardStyle = {
    borderRadius: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    padding: '15px',
    maxWidth: '300px', // Sufficient width to handle content
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    overflow: 'visible',
    animation: 'slideInFromLeft 0.5s ease-out',
  };
  const itemStyle = {
    display: 'flex',
    flexDirection: 'row', // Items displayed in a row
    justifyContent: 'space-around', // Space out items within the row
    alignItems: 'center',
    width: '100%', // Ensure the row uses the full width of the card
    margin: '10px 0',
    gap:'12px',
    flexWrap:'wrap'
  };

  const iconStyle = {
    fontSize: '24px',  // Icon size
    margin: '10px'
   
  };

  const textStyle = {
    fontSize: '12px',  // Text size
    textAlign: 'center',
  };
  return (
    <>
      <motion.div 
      // variants={textVariant()}
      >
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies</h2>
      </motion.div>
          <motion.div
      // variants={fadeIn('right', 'spring', 0.5*index, 0.75)}
      >
       <div style={containerStyle}>
      {Object.entries(technologies).map(([category, items]) => (
        <div key={category} style={cardStyle}>
          <h3 class="font-poppins">{category.replace('_', ' ')}</h3>
          <div style={itemStyle}>
            {items.map((item) => (
              <div key={item.name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <i className={item.icon} style={iconStyle}></i>
                <span style={textStyle } class="text-taupe">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
    </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, 'skills');

