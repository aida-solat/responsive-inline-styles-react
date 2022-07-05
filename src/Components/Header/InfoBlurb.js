import React, { useState } from 'react'

function InfoBlurb(props) {
  const [dropDown, setDropDown] = useState(false)

  const handleClick = () => {
    dropDown ? setDropDown(false) : setDropDown(true)
    console.log('this is dropDown', dropDown)
  }

  const arrowPosition = dropDown ? 'open' : 'closed'
  const descriptionActive = dropDown ? 'open' : ''
  
  return (
    <div className="wrapper">
      <div className="article">
        <h1>
          <a href="#">{props.activeBullet.title}</a>

        <span className={`arrow ${arrowPosition}`} onClick={handleClick}></span>
        </h1>
        <div className={`description ${descriptionActive}`}>
          {props.activeBullet.description}
        </div>
        <footer><a href="#">More</a></footer>
      </div>
    </div>
  )
}

export default InfoBlurb