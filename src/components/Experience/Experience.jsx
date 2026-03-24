import './experience.css';
import { forwardRef } from 'react';
import { experiences } from './experience_data';


const Experience = forwardRef((props, ref) => {


  const shadow = {
    boxShadow: '2px 2px 2px var(--accent)',
  };

  return (
    <div ref={ref} className='experience-section-outer'>
      <div className='experience-heading'>
        <div className='heading-line-dot'>
          <div className='heading-dot' style={ {boxShadow: '2px 0 2px var(--accent)'} } />
          <div className='heading-line' style={ shadow } />
        </div>
        <h2>My Experience</h2>
      </div>
      {
        experiences.map(exp => {
          return <ExperienceCard
            key={crypto.randomUUID()}
            org={exp.orgName}
            start={exp.startMonth + " " + exp.startYear}
            end={exp.endMonth + " " + exp.endYear}
            role={exp.role}
            icon={exp.image}
            work={exp.responsibilities}
            desc={exp.desc}
          />
        })
      }
    </div>
  );
});

function ExperienceCard({org, start, end, role, work, icon, desc}) {


  const shadow = {
    boxShadow: '2px 2px 2px var(--accent)',
  };

  return (
    <div className='experience-card-outer'>
      <div className='experience-card-dot' style={ {boxShadow: '2px 0 2px var(--accent)'}} />
      <div className='experience-card-time'>
        {start} to {end}
      </div>
      <div className='experience-card-line' style={ shadow } />
      <div className='experience-card-info'>
        <div className={`experience-card-info-left`} style={ shadow } >
          <div className='experience-card-info-left-top'>
            <img src={icon} />
            <h3>{org}</h3>
          </div>
          <h4>Role: {role}</h4>
          <p>{desc}</p>
        </div>
        <ul className='experience-card-info-right'>
          { work.map(w => <li key={crypto.randomUUID()} >{w}</li>) }
        </ul>
      </div>
    </div>
  );
}

export default Experience;
