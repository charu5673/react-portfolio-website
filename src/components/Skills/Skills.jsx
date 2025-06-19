// css import
import './skills.css';

// react functionalities import 
import { useState } from 'react';


// pages import


// components import


// hooks import


// data import
import { skills, icons } from './skills_data.jsx';


function Skills() {

  return (
    <div className='skills-section-outer'>
      <h3>My skills</h3>
      <div className='skills-section-inner'>
        <SkillsOuter title={"Programming Languages"} skills={skills.languages} />
        <SkillsOuter title={"Frameworks & Libraries"} skills={skills.frameworks} />
        <SkillsOuter title={"Tools & Platforms"} skills={skills.tools} />
      </div>
    </div>
  );
}

function SkillsOuter({ title, skills }) {
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
