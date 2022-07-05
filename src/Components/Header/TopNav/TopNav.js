import React from "react";
import './TopNav.css'
import TopNavItems from './TopNavItems'

function TopNav(props) {
  console.log("TopNav - props", props.showTopNavMenu);

  return (
    <section className="header-nav-area">
      <div className="brand_area">
        <div className="brand1">
          <a
            className="nasa_logo"
            href="http://www.nasa.gov"
            target="_blank"
            title="visit nasa.gov"
          >
            NASA
          </a>
        </div>
        <div className="brand2">
          <a
            className="top_logo"
            href="https://science.nasa.gov/"
            target="_blank"
            title="Explore NASA Science"
          >
            NASA Science
          </a>
          <a className="sub_logo" href="/mars-exploration/#" title="Mars">
            Mars Exploration Program
          </a>
        </div>
      </div>
      <TopNavItems {...props}/> 
      {/* Alternate solution to show/hide those elements */}
      {/* {props.styles.showTopNavMenu ? 
        <TopNavItems /> : 
        <span className="menu-icon" /> 
      } */}
    </section>
  );
}

export default TopNav;
