import React from "react";
import Slider from "react-slick";
import s from './Slider.module.css';

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider className={s.skiderr} {...settings}>
      <div>
        <img className={s.kartinka} src="https://i.pinimg.com/736x/ab/89/7a/ab897af62566c2c1789bf00997d11411.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/736x/ea/0a/fb/ea0afb20a185d4e21a22e061d031a27a.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/control/564x/42/73/b3/4273b3a11de4d1546fee2ff646e81eb2.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/564x/ec/0f/d1/ec0fd1b68a0726ca9116da62ed57c532.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/control/564x/fd/12/eb/fd12ebeb4918b19d1557d8779ddad967.jpg"></img>
      </div>
      <div>
      <img className={s.kartinka} src="https://i.pinimg.com/control/564x/67/24/51/672451aa630eea1aa3193d61c1234211.jpg"></img>
      </div>
    </Slider>
  );
}