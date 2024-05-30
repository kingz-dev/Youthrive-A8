import React from "react";
import './portfolio.scss'

const Portfolio = ({developer}) => {
  return (
    <div>
      <div id="Portfolio">
        <h1>{developer} is a Frontend Developer</h1>
        <p>Skill sets</p>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>React etc...</li>
        </ul>
      </div>
    </div>
  );
};

export default Portfolio;
