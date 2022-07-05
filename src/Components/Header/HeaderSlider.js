import React from "react";

function HeaderSlider() {
  return (
    <section className="dashboard">
    <div className="slide_container">
      <button className="slick-prev"></button>
      <div className="slick-list">
        <div className="slick-track slick-active" index="0">
          <article className="slide">
            <div className="image_and_description_container">
              <div className="readout">
                <div className="title">Curiosity</div>
                <div className="value">2440 SOLS ON MARS</div>
              </div>
            </div>
            <span className="circle_plus"></span>
          </article>
        </div>
        <div className="slick-track" index="1">
          <article className="slide">
            <div className="image_and_description_container">
              <div className="readout">
                <div className="title">Oppportunity</div>
                <div className="value">12 YEARS ON MARS</div>
              </div>
            </div>
            <span className="circle_plus"></span>
          </article>
        </div>
        <div className="slick-track" index="2">
          <article className="slide">
            <div className="image_and_description_container">
              <div className="readout">
                <div className="title">INSIGHT</div>
                <div className="value">320 SOLS ON MARS</div>
              </div>
            </div>
            <span className="circle_plus"></span>
          </article>
        </div>
      </div>
      <button className="slick-next"></button>
    </div>
    <div className="nav-prev"></div>
    <div className="nav-next"></div>
  </section>
  )
}

export default HeaderSlider