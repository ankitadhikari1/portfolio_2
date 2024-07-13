import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.5)} // Corrected fadeIn
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card' // Corrected class name
      >
        <div
          options={{ 
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}> Overview..</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 0.1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I am a Computer Science student at Graphic Era Hill University, with a strong passion for innovation and problem-solving in the tech world. My academic journey has equipped me with a solid foundation in programming, algorithms, and software development. I am dedicated to continuously expanding my knowledge and skills, with a keen interest in emerging technologies and their practical applications. I am eager to contribute to impactful projects and collaborate with like-minded individuals to drive technological advancements.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} /> // Corrected map return
        ))}
      </div>
    </>
  );
};



export default SectionWrapper(About,"about");
