import React from 'react'
import css from './Hero.module.scss'
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={`innerWidth ${css.container}`}>

        {/* upper elements */}
        <div className={css.upperElements}>
          <span>
            Hey There, <br /> I'm Andrew.
          </span>
          <span>
            I design beautiful simple
            <br />
            things, And I love what I do
          </span>
        </div>

        {/* lower elements */}
        <div className={css.lowerElements}>
          <div className={css.experience}></div>
          <div className="primaryText">10</div>
          <div className="secondaryText">
          <div>Years</div>
          <div>Experience</div>
        </div>
        </div>
        <div className={css.certificate}>
          <img src="./certificate.png" alt="" />
          <span>CERTIFIED PROFATIONAL</span>
          <span>UI/UX DESIGNER</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;