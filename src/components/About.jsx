import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Learn</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        At heart, I'm a storyteller with code as my medium. My professional path
        has zigzagged from being a programmer analyst to pursuing a master's in
        computer science, and now, working as a software developer. Whether it’s
        building seamless software systems or pioneering new tech applications,
        I put my heart into every project. I find joy in the challenge of
        turning complex ideas into simple, impactful realities that enhance
        everyday life. Below are the key areas where I apply my expertise. From
        developing sophisticated frontend systems and robust backend
        architectures to pioneering data engineering and AI-driven solutions,
        each project showcases my dedication to pushing technological boundaries
        and delivering excellence.
      </motion.p>
      {/* 
      <div className="mt-20 flex flex-wrap gap-10" style={{ scrollbarWidth: "none" }}> */}
      {/* <div className="mt-20 flex overflow-x-auto gap-10" style={{ scrollbarWidth: "thin", whiteSpace: "nowrap" , backgroundColor:' rgba(244,244,246,1)'}}> */}

      <div
        className="service-cards-container mt-20 flex overflow-x-auto gap-10"
        style={{
          scrollbarWidth: "thin",
          whiteSpace: "nowrap",
          backgroundColor: "rgba(244,244,246,1)",
        }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
