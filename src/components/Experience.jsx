import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';
import React, { useState } from "react";
import "react-vertical-timeline-component/style.min.css";

const ExperienceModal = ({ experience, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("description"); // Default to Description

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50 p-4 transition-opacity duration-300"
      onClick={onClose} // Clicking anywhere outside closes the modal
    >
      {/* Modal Container */}
      <div
        className="bg-white bg-opacity-90 rounded-xl shadow-2xl w-[90%] md:w-[80%] h-[75vh] flex flex-col relative p-6 transition-transform duration-300 scale-100"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
      >
        {/* Modal Header */}
        <div className="text-center border-b pb-3">
          <h2 className="text-2xl font-bold text-[rgb(31,31,31)]">{experience.title}</h2>
          <p className="text-[rgb(31,31,31)] text-lg">{experience.company_name}</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-between text-base font-semibold mt-3 border-b" style={{ width: "85%", margin: "auto" }}>
          {["Tech Used", "Description", "Key Contributions"].map((tab, index) => (
            <button
              key={index}
              className={`w-1/3 py-3 transition-all duration-300 ${
                activeTab === tab.toLowerCase().replace(" ", "")
                  ? "border-b-4 text-[rgb(31,31,31)] border-[rgb(31,31,31)]"
                  : "text-gray-500 hover:text-gray-700"
              }`}
              onClick={() => setActiveTab(tab.toLowerCase().replace(" ", ""))}
            >
              {tab}
            </button>
          ))}
        </div>

        

        {/* Scrollable Content */}
        <div
          className="flex-1 overflow-y-auto p-5 text-[rgb(31,31,31)] text-lg leading-relaxed"
          style={{
            scrollbarWidth: "thin", // For Firefox
            scrollbarColor: "#1f1f1f transparent", // Black handle, transparent track
          }}
        >
          <style>
            {`
              /* WebKit Browsers (Chrome, Edge, Safari) */
              ::-webkit-scrollbar {
                width: 6px; /* Makes it slim */
              }

              ::-webkit-scrollbar-track {
                background: transparent; /* Removes default background */
              }

              ::-webkit-scrollbar-thumb {
                background: #1f1f1f; /* Sets it to black */
                border-radius: 10px; /* Smooth rounded look */
              }

              ::-webkit-scrollbar-thumb:hover {
                background: #333333; /* Slightly lighter when hovered */
              }

              /* Fixes missing list styles */
              .styled-list ul {
                list-style-type: disc;
                margin-left: 1.5rem;
              }

              .styled-list li {
                margin-bottom: 0.5rem;
              }
            `}
          </style>

          {/* Ensure data exists before rendering */}
          {activeTab === "techused" && experience.techUsed ? (
            <div className="styled-list" dangerouslySetInnerHTML={{ __html: experience.techUsed }} />
          ) : null}
          
          {activeTab === "description" && experience.description ? (
            <div className="styled-list" dangerouslySetInnerHTML={{ __html: experience.description }} />
          ) : null}
          
          {activeTab === "keycontributions" && experience.contributions ? (
            <div className="styled-list" dangerouslySetInnerHTML={{ __html: experience.contributions }} />
          ) : null}

          {/* Show message if no data exists */}
          {activeTab !== "description" &&
            !experience[activeTab] && <p className="text-gray-500"></p>}
        </div>
      </div>
    </div>
  );
};



const ExperienceCard = ({ experience }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          background: isHovered ? "#ffffff" : "#1f1f1f", // Light background on hover
          color: isHovered ? "#1f1f1f" : "#ffffff", // Dark text on hover
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
          cursor: "pointer",
          transition: "background 0.3s ease, color 0.3s ease",
        }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={<span style={{ color: "black", fontWeight: "bold" }}>{experience.date}</span>}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
          </div>
        }
      >
        {/* Make Entire Card Clickable */}
        <div
          className="p-4 rounded-lg transition-all duration-300"
          onClick={() => setIsOpen(true)}
          onMouseEnter={() => setIsHovered(true)} // Desktop Hover
          onMouseLeave={() => setIsHovered(false)}
          onTouchStart={() => setIsHovered(true)} // Mobile Hover (Touch Start)
          onTouchEnd={() => setTimeout(() => setIsHovered(false), 1000)} // Ensures hover effect resets
          style={{
            display: "flex",
            flexDirection: "column",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <h3 className="text-[22px] font-bold">{experience.title}</h3>
          <p className="text-[18px]">{experience.company_name}</p>
        </div>

        
      </VerticalTimelineElement>
      

      <ExperienceModal experience={experience} isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};


// Experience Timeline Component
const Experience = () => {
  return (
    <VerticalTimeline>
      {experiences.length > 0 ? (
        experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))
      ) : (
        <p className="text-white">No experience data available</p>
      )}
      <VerticalTimelineElement 
  contentStyle={{
    background: '#1f1f1f', // Same as timeline background
    color: '#ffffff', // White text for contrast
    boxShadow: 'none', // No extra shadow to make it blend
    padding: "10px", // Reduce padding for a compact look
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
  contentArrowStyle={{ borderRight: "7px solid #1f1f1f" }} // Makes arrow blend in
  iconStyle={{ background: '#333333' }} // Keeps only the icon
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={resume}
        alt="resume"
        className="w-[45%] h-[45%] object-contain"
      />
    </div>
  }
>
  {/* Resume Download Button */}
  <div className="flex justify-center">
    <button
      className="flex justify-between items-center
      sm:text-[16px] text-[14px] text-white
      font-bold py-2 px-4 
      whitespace-nowrap gap-2 sm:w-[140px] 
      w-[120px] rounded-md bg-[#333333]
      hover:bg-[#444444] hover:text-gray-200 
      transition duration-200 ease-in-out"
      onClick={() =>
        window.open(
          'https://drive.google.com/file/d/1Rb99c4_PVN81W_XNPqVNL8io9y2qNUMn/view?usp=share_link',
          '_blank'
        )
      }
    >
      MY RESUME
      <img
        src={download}
        alt="download"
        className="w-[18px] h-[18px] object-contain"
      />
    </button>
  </div>
</VerticalTimelineElement>

          </VerticalTimeline>
  );
};


export default SectionWrapper(Experience, 'experience');