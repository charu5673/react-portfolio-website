// css import
import './skills.css';

// react functionalities import 
import { useState } from 'react';
import { forwardRef } from 'react';
import { useEffect } from 'react';


// pages import


// components import


// hooks import


// data import
import { skills, icons } from './skills_data.jsx';


const Skills = forwardRef((props, ref) => {

  return (
    <div ref={ref} className='skills-section-outer'>
      <h3>My skills</h3>
      <div className='skills-section-inner'>
        <SkillsOuter title={"Programming Languages"} skills={skills.languages} />
        <SkillsOuter title={"Frameworks & Libraries"} skills={skills.frameworks} />
        <SkillsOuter title={"Tools & Platforms"} skills={skills.tools} />
      </div>
    </div>
  );
});

function SkillsOuter({ title, skills }) {

  const [background, setBackground] = useState("");

  const [skillInfo, setSkillInfo] = useState({
    name: "",
    percentage: "",
  });

  const addSkillMeter = (skill) => {
    setSkillInfo({
      name: skill[0],
      percentage: skill[1] + "%",
    });
  };

  const resetSkillMeter = () => {
    setSkillInfo({
      name: "",
      percentage: "",
    });
  };

  useEffect(() => {

    const handleResize = () => {
      setBackground(calculateBackground());
    };
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  const calculateBackground = () => {
    const width = window.getComputedStyle(document.querySelector(".skill-meter")).width;
    const redPos = parseInt(width) / 5;
    const greenPos = redPos * 4;
    return `linear-gradient(to right, rgb(255, 110, 110) ${redPos}px, rgb(210, 210, 122), rgb(80, 207, 80) ${greenPos}px)`;
  }



  return (
    <div className='skills-outer'>
      <div className='skills-outer-top'>
        <h4>{title}</h4>
        <h5>{skillInfo.name}</h5>
        <div className='skill-meter' >
          <div
            className='skill-meter-filled'
            style={{
              width: skillInfo.percentage,
              background: background,
            }}
          />
          <div
            className='skill-percentage'
            style={{ marginLeft: skillInfo.percentage }}
          >
            {skillInfo.percentage}
          </div>
        </div>
      </div>

      <div className='skills-div'>
        {skills.map((skill) => (
          <div
            key={skill[0]}
            className='skill-wrapper'
            onMouseEnter={() => addSkillMeter(skill)}
            onMouseLeave={resetSkillMeter}
          >
            <img className='skill' src={icons[skill[0]]} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
