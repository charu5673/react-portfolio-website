// css import
import './projects.css';

// react functionalities import 
import { useState } from 'react';
import { forwardRef } from 'react';


// pages import


// components import


// hooks import
import useTheme from '../../hooks/useTheme';


// data import
import { projects, types, icons } from './projects_data';



const Projects  = forwardRef((props, ref) => {

  const [selectedTypes, updateSelectedTypes] = useState(types);
  const [dialogFlag, setDialogFlag] = useState(false);

  const handleClick = (f) => {
    setDialogFlag(f);
  }

  return (
    <div ref={ref} className='projects-section-outer'>
      <div className='projects-section-outer-top'>
        <h2>My Projects</h2>
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" height="55px" onClick={()=>{handleClick(true)}}>
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <path fillRule="evenodd" clipRule="evenodd" d="M14.2788 2.15224C13.9085 2 13.439 2 12.5 2C11.561 2 11.0915 2 10.7212 2.15224C10.2274 2.35523 9.83509 2.74458 9.63056 3.23463C9.53719 3.45834 9.50065 3.7185 9.48635 4.09799C9.46534 4.65568 9.17716 5.17189 8.69017 5.45093C8.20318 5.72996 7.60864 5.71954 7.11149 5.45876C6.77318 5.2813 6.52789 5.18262 6.28599 5.15102C5.75609 5.08178 5.22018 5.22429 4.79616 5.5472C4.47814 5.78938 4.24339 6.1929 3.7739 6.99993C3.30441 7.80697 3.06967 8.21048 3.01735 8.60491C2.94758 9.1308 3.09118 9.66266 3.41655 10.0835C3.56506 10.2756 3.77377 10.437 4.0977 10.639C4.57391 10.936 4.88032 11.4419 4.88029 12C4.88026 12.5581 4.57386 13.0639 4.0977 13.3608C3.77372 13.5629 3.56497 13.7244 3.41645 13.9165C3.09108 14.3373 2.94749 14.8691 3.01725 15.395C3.06957 15.7894 3.30432 16.193 3.7738 17C4.24329 17.807 4.47804 18.2106 4.79606 18.4527C5.22008 18.7756 5.75599 18.9181 6.28589 18.8489C6.52778 18.8173 6.77305 18.7186 7.11133 18.5412C7.60852 18.2804 8.2031 18.27 8.69012 18.549C9.17714 18.8281 9.46533 19.3443 9.48635 19.9021C9.50065 20.2815 9.53719 20.5417 9.63056 20.7654C9.83509 21.2554 10.2274 21.6448 10.7212 21.8478C11.0915 22 11.561 22 12.5 22C13.439 22 13.9085 22 14.2788 21.8478C14.7726 21.6448 15.1649 21.2554 15.3694 20.7654C15.4628 20.5417 15.4994 20.2815 15.5137 19.902C15.5347 19.3443 15.8228 18.8281 16.3098 18.549C16.7968 18.2699 17.3914 18.2804 17.8886 18.5412C18.2269 18.7186 18.4721 18.8172 18.714 18.8488C19.2439 18.9181 19.7798 18.7756 20.2038 18.4527C20.5219 18.2105 20.7566 17.807 21.2261 16.9999C21.6956 16.1929 21.9303 15.7894 21.9827 15.395C22.0524 14.8691 21.9088 14.3372 21.5835 13.9164C21.4349 13.7243 21.2262 13.5628 20.9022 13.3608C20.4261 13.0639 20.1197 12.558 20.1197 11.9999C20.1197 11.4418 20.4261 10.9361 20.9022 10.6392C21.2263 10.4371 21.435 10.2757 21.5836 10.0835C21.9089 9.66273 22.0525 9.13087 21.9828 8.60497C21.9304 8.21055 21.6957 7.80703 21.2262 7C20.7567 6.19297 20.522 5.78945 20.2039 5.54727C19.7799 5.22436 19.244 5.08185 18.7141 5.15109C18.4722 5.18269 18.2269 5.28136 17.8887 5.4588C17.3915 5.71959 16.7969 5.73002 16.3099 5.45096C15.8229 5.17191 15.5347 4.65566 15.5136 4.09794C15.4993 3.71848 15.4628 3.45833 15.3694 3.23463C15.1649 2.74458 14.7726 2.35523 14.2788 2.15224ZM12.5 15C14.1695 15 15.5228 13.6569 15.5228 12C15.5228 10.3431 14.1695 9 12.5 9C10.8305 9 9.47716 10.3431 9.47716 12C9.47716 13.6569 10.8305 15 12.5 15Z" fill="#f5f7ff"></path>
          </g>
        </svg>
      </div>
      <div className='projects-outer'>
        {
          projects.map(project => {
            return (
              selectedTypes.some(item => project.types.includes(item)) ?
              <ProjectCard key={crypto.randomUUID()} title={project.title} description={project.description} icon={project.icon} github={project.github} website={project.website} tech={project.tech} /> :
              null
            );
          })
        }
      </div>
      { dialogFlag ? <ProjectsSettingsDialog selectedTypes={selectedTypes} types={types} updateSelectedTypes={updateSelectedTypes} updateFlag={()=>{handleClick(false)}} /> : null }
    </div>
    
  );
});

function ProjectCard({title, description, icon, website, github, tech}) {

  return (
    <div className='project-card-outer'>
      <img src={icon} />
      <div className='project-card-content'>
        <div className='project-card-content-top'>
          <a href={website} target='_blank' className={ website ? 'hover-style' : '' } >
            <h3>{title}</h3>
          </a>
          <a href={github} target='_blank'>
            <svg viewBox="0 0 24 24" version="1.1">
              <path d="M12 1C5.9225 1 1 5.9225 1 12C1 16.8675 4.14875 20.9787 8.52125 22.4362C9.07125 22.5325 9.2775 22.2025 9.2775 21.9137C9.2775 21.6525 9.26375 20.7862 9.26375 19.865C6.5 20.3737 5.785 19.1912 5.565 18.5725C5.44125 18.2562 4.905 17.28 4.4375 17.0187C4.0525 16.8125 3.5025 16.3037 4.42375 16.29C5.29 16.2762 5.90875 17.0875 6.115 17.4175C7.105 19.0812 8.68625 18.6137 9.31875 18.325C9.415 17.61 9.70375 17.1287 10.02 16.8537C7.5725 16.5787 5.015 15.63 5.015 11.4225C5.015 10.2262 5.44125 9.23625 6.1425 8.46625C6.0325 8.19125 5.6475 7.06375 6.2525 5.55125C6.2525 5.55125 7.17375 5.2625 9.2775 6.67875C10.1575 6.43125 11.0925 6.3075 12.0275 6.3075C12.9625 6.3075 13.8975 6.43125 14.7775 6.67875C16.8813 5.24875 17.8025 5.55125 17.8025 5.55125C18.4075 7.06375 18.0225 8.19125 17.9125 8.46625C18.6138 9.23625 19.04 10.2125 19.04 11.4225C19.04 15.6437 16.4688 16.5787 14.0213 16.8537C14.42 17.1975 14.7638 17.8575 14.7638 18.8887C14.7638 20.36 14.75 21.5425 14.75 21.9137C14.75 22.2025 14.9563 22.5462 15.5063 22.4362C19.8513 20.9787 23 16.8537 23 12C23 5.9225 18.0775 1 12 1Z"></path>
            </svg>
          </a>
        </div>
        <p>{description}</p>
        <div className='project-card-tech'>
          {
            tech.map(t => {
              return <img key={crypto.randomUUID()} src={icons[t]} />
            })
          }
        </div>
      </div>
    </div>
  );
}

function ProjectsSettingsDialog({types, selectedTypes, updateSelectedTypes, updateFlag}) {

  const { theme } = useTheme();

  const [currentSelectedTypes, setCurrentSelectedTypes] = useState(selectedTypes);

  const handleClick = () => {
    updateSelectedTypes(currentSelectedTypes);
    updateFlag();
  }

  const updateTypes = (e) => {
    const newTypes = currentSelectedTypes.indexOf(e.target.id) == -1 ? [...currentSelectedTypes, e.target.id] : currentSelectedTypes.filter(i => i !== e.target.id);
    setCurrentSelectedTypes(newTypes);
  }

  const closeDialog = () => {
    updateFlag();
  };

  const stopEvent = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='projects-dialog-outer' onClick={closeDialog}>
      <div className='projects-dialog' onClick={stopEvent}>
        <h4>Which projects would you like to see? { theme == 'normal' ? '' : ':]' } </h4>
        {
          types.map(type => {
            return (
              <div key={crypto.randomUUID()} className='projects-dialog-input'>
                <label htmlFor={type}>
                  {type}
                </label>
                <input id={type} type='checkbox' checked={currentSelectedTypes.includes(type)} onChange={updateTypes}></input>
              </div>
            );
          })
        }
        <button onClick={handleClick} >Apply</button>
      </div>
    </div>
  );
}

export default Projects;
