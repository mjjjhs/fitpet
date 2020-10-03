import * as React from "react";
import ContentStyle from "../Styles/ContentStyle";
import Slider from "react-slick";

/*
<img 
            src="/images/dr_01.png"
            className="layer"
          />
srcSet="/images/dr_01@2x.png,
                    /images/dr_01@3x.png"
*/

const settings = {
  className: "slider slider_q variable-width",
  arrows: false,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "20px",
  adaptiveHeight: true,
};

function Content() {
  return (
    <div className="content">
      <section className="feature_dr">
        선생님이미지
      </section>
      <Slider {...settings}>
        <div className="cont type1">
          <div className="tit"></div>
          <h3>1</h3>
        </div>
        <div className="cont type2">
          <h3>2</h3>
        </div>
        <div className="cont type3">
          <h3>2</h3>
        </div>
      </Slider>
      <style jsx>{ContentStyle}</style>
    </div>
  );
}

export default Content;