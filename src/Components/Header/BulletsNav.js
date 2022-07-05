import React from 'react'

function BulletsNav({imageGallery, activeBullet, onClick}) {

  const bullets = imageGallery.map( (d,i) => {
    const selected = activeBullet === i ? 'bullet-selected' : ''
    return (
      <div 
        key={i}
        className={`bullet ${selected} data-id=${activeBullet}`}
        onClick={() => onClick(i)}
        ></div>
    )
  })
  

  return (
  <div className="bullets-count">
    {bullets}
  </div>
 )
}

export default BulletsNav

// \
// const bullets = imageGallery.map( (d,i) => {
//   const selected = activeBullet === i ? 'bullet-selected' : ''
//   return (
//     <div className={`bullet ${selected}" data-id=${i}`}></div>
//   )
// })

// return (
// <div className="bullets-count">
//   {bullets}
// </div>
// )