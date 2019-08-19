import React from 'react';
import githublogo from '../github.png'
import './header.css';

export default class Header extends React.Component {
  render() {
    return <div className="header">
      <div className="header-left">Itgo</div>
      <div className="header-right">
        <img src={githublogo} className="github-icon" alt={"git"} />
      </div>
    </div>
  }
}
