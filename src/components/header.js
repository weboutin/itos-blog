import React from 'react';
import githublogo from '../github.png'
import styled from 'styled-components'

const HeaderContainer = styled.div`
  width: 100%;
  position: fixed;
  height: 60px;
  background-color: #ffffff;
  box-shadow: 0px 2px 3px #aaaaaa;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 50px;
`;

// .header-left {
//   line-height: 60px;
//   font-size: 20px;
//   width: 300px;
//   color: #666;
//   box-sizing: border-box;
//   display: flex;
// }

// .header-right {
//   height: 60px;
//   display: flex;
//   justify-content: space-between;
// }

// .header-left-title {
//   text-align: center;
// }

// .github-icon {
//   cursor: pointer;
//   line-height: 60px;
//   margin-top: 15px;
//   width: 30px;
//   height: 30px;
//   display: block;
// }

// img {
//   width: 100%;
//   height: 100%;
// }


export default class Header extends React.Component {
  render() {
    return <HeaderContainer >
      <div className="header-left">Itgo</div>
      <div className="header-right">
        <img src={githublogo} className="github-icon" alt={"git"} />
      </div>
    </HeaderContainer>
  }
}
