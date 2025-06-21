// tech icons
import pythonIcon from '../../assets/images/icons/python.png';
import sqlIcon from '../../assets/images/icons/sql.png';
import cIcon from '../../assets/images/icons/c.png';
import cppIcon from '../../assets/images/icons/cpp.png';
import cssIcon from '../../assets/images/icons/css.png';
import dartIcon from '../../assets/images/icons/dart.png';
import htmlIcon from '../../assets/images/icons/html.png';
import javaIcon from '../../assets/images/icons/java.png';
import javascriptIcon from '../../assets/images/icons/javascript.png';
import xmlIcon from '../../assets/images/icons/xml.png';
import reactIcon from '../../assets/images/icons/react.png';
import mongoIcon from '../../assets/images/icons/mongo.png';
import webpackIcon from '../../assets/images/icons/webpack.png';
import openweathermapIcon from '../../assets/images/icons/openweathermap.png';
import visualcrossingIcon from '../../assets/images/icons/visualcrossing.png';
import flaskIcon from '../../assets/images/icons/flask.png';
import androidstudioIcon from '../../assets/images/icons/androidstudio.png';
import vercelIcon from '../../assets/images/icons/vercel.png';
import renderIcon from '../../assets/images/icons/render.png';
import netlifyIcon from '../../assets/images/icons/netlify.png';

// projects icons
import nonogramIcon from '../../assets/images/icons/nonogram.png';
import unoIcon from '../../assets/images/icons/uno.png';
import whetheritrainsIcon from '../../assets/images/icons/whetheritrains.png';
import convoproIcon from '../../assets/images/icons/convopro.png';
import cvapplicationIcon from '../../assets/images/icons/cvapplication.png';
import battleshipIcon from '../../assets/images/icons/battleship.png';
import todoIcon from '../../assets/images/icons/todo.png';
import dotsandlinesIcon from '../../assets/images/icons/dotsandlines.png';
import lgameIcon from '../../assets/images/icons/lgame.png';

export const icons = {
    "Python": pythonIcon,
    "SQL": sqlIcon,
    "C": cIcon,
    "C++": cppIcon,
    "CSS": cssIcon,
    "Dart": dartIcon,
    "HTML": htmlIcon,
    "Java": javaIcon,
    "JavaScript": javascriptIcon,
    "React": reactIcon,
    "MongoDB": mongoIcon,
    "Webpack": webpackIcon,
    "OpenWeatherMap": openweathermapIcon,
    "VisualCrossing": visualcrossingIcon,
    "XML": xmlIcon,
    "Flask": flaskIcon,
    "Android Studio": androidstudioIcon,
    "Vercel": vercelIcon,
    "Render": renderIcon,
    "Netlify": netlifyIcon,
};

export const projects = [
  {
    title: "Nonogram Game",
    description: "A website made using React, Flask, and MongoDB, where users can play the game 'Nonogram' in three different modes of difficulties, and create their own puzzles which they can edit, and play. The website offers a visually appealing, and user friendly interface, with both dark and light mode.",
    icon: nonogramIcon,
    github: "https://github.com/charu5673/nonogram",
    website: "https://nonogram-eta.vercel.app/",
    tech: ["React","JavaScript","CSS","MongoDB","Flask","Python","Vercel","Render"],
		types: ["Web", "React", "JavaScript","Flask"],
  },
  {
    title: "Whether it rains",
    description: "A website made using HTML/CSS, JavaScript, and Webpack modules, where users can see the weather details for the next week of any location. It also implements geolocation to detect the user's location and show it's weather information. It uses VisualCrossing and OpenWeatherMap API to provide accurate information.",
    icon: whetheritrainsIcon,
    github: "https://github.com/charu5673/weather-app",
    website: "https://charu5673.github.io/weather-app/",
    tech: ["HTML","JavaScript","CSS","Webpack","OpenWeatherMap","VisualCrossing"],
		types: ["JavaScript","Web"],
  },
  {
    title: "Convo Pro",
    description: "An android app made using Java and Android Studio. It is a units conversion that app that features 10+ categories of units and allows users to swap, compute and easily navigate between different categories. It features an easy to use, user-friendly interface.",
    icon: convoproIcon,
    github: "https://github.com/charu5673/convo-pro",
    website: "",
    tech: ["Java","XML","Android Studio"],
		types: ["App","Java"],
  },
  {
    title: "UNO Game",
    description: "A website made using HTML/CSS, and JavaScript, where users can play the game 'UNO' with up to 3 programmed bot players. The website features a vibrant, user-friendly interface, and complete implementation of all game mechanics such as, skipping, reversing, and drawing cards.",
    icon: unoIcon,
    github: "https://github.com/charu5673/uno",
    website: "https://charu5673.github.io/uno/",
    tech: ["HTML","JavaScript","CSS"],
		types: ["Web","JavaScript"],
  },
  {
    title: "Battleship",
    description: "A website made using HTML/CSS, and JavaScript that allows users to play the classic board game 'Battleship'. It features a user-friendly interface where players can place their ships in their choice of position and orientation, as well as randomize the locations instantly.",
    icon: battleshipIcon,
    github: "https://github.com/charu5673/battleship",
    website: "https://charu5673.github.io/battleship/",
    tech: ["JavaScript","HTML","CSS","Webpack"],
		types: ["Web","JavaScript"],
  },
  {
    title: "Don'Task",
    description: "A website made using HTML/CSS, and JavaScript, that allows users to keep track of their tasks. It features a user-friendly interface where you can create, edit, manage, and mark tasks. The tasks include due data, and time, checklists, descriptions, notes, and priorities.",
    icon: todoIcon,
    github: "https://github.com/charu5673/to-do",
    website: "https://charu5673.github.io/to-do/",
    tech: ["JavaScript","HTML","CSS","Webpack"],
		types: ["Web","JavaScript"],
  },
  {
    title: "L Game",
    description: "An android app made using Java, and Android Studio, where the users can play an abstract strategy board game called 'L Game', a turn-based game played by two players. The app features a user-friendly interface with complete implementation of game mechanics such as piece movement,changing turns, and game status updates.",
    icon: lgameIcon,
    github: "https://github.com/charu5673/L_Game",
    website: "",
    tech: ["Java","XML","Android Studio"],
		types: ["App","Java"],
  },
  {
    title: "Dots and Lines",
    description: "An android app made using Java, and Android Studio. It allows users to play the classic game 'Dots and Lines', where you're supposed to create boxes by drawing lines between a grid of dots. The app features a user-friendly interface where two players can play the turn-based game.",
    icon: dotsandlinesIcon,
    github: "https://github.com/charu5673/dots_and_lines",
    website: "",
    tech: ["Java","XML","Android Studio"],
		types: ["App","Java"],
  },
  {
    title: "Resume Generator",
    description: "A website made using React that allows users to generate resumes. They have to enter information such as, personal details, educational details, and work experiences, and the generator automatically formats it into a professional, sleek resume.",
    icon: cvapplicationIcon,
    github: "https://github.com/charu5673/cv-application",
    website: "https://generateresumecv.netlify.app/",
    tech: ["React","JavaScript","CSS","Netlify"],
		types: ["Web","React","JavaScript"],
  },
];

export const types = ["App", "Web", "React", "JavaScript", "Java", "Flutter", "Flask"];