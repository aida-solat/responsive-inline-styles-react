import React from 'react'

function TopNavItems({ showTopNavMenu }) {
  const menuItems = [' The Red Planet', ' The Program', 'News & Events', 'Multimedia', ' Missions', 'More']
  
  const navMenuItems = menuItems.map( (d,i) => {
    return (
      <a key={i} href="#" className="nav-element">
       {d}
    </a>
    )
  })

  const showNav= {
    display: showTopNavMenu ? 'flex' : 'none'
  }
  const showMenuIcon = {
    display: showTopNavMenu ? 'none' : 'flex',
  }
  
  return (
    <>
    <div id="nav_container" style={showNav}>
      <nav id="navigation">{navMenuItems}</nav>
      <form className="meganav_search" action="/search/">
        <input
          type="text"
          className="search_field "
          name="q"
          placeholder=""
        />
        <div className="search_submit" />
      </form>
    </div>
    <span className="menu-icon" style={showMenuIcon}/> 
   </>
  )
}

export default TopNavItems