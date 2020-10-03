import * as React from "react";
import ContentStyle from "../Styles/ContentStyle";
import Slider from "react-slick";

const settings = {
  className: "slider_box",
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
        <img src="images/dr_01.png" />
      </section>
      <Slider {...settings}>
        <div className="cont type1">
          <div className="head">
            <em>Q1.</em>
            <div className="page">1/18</div>
          </div>
          <div className="tit">
            <h3>과거 혹은 현재 앓고 있는 질병을 선택해 주세요</h3>
            <p className="notice">중복 선택 가능</p>
          </div>
          <ul className="list_option">
            <li>
              <input type="checkbox" id="inp_check_q01" className="inp_check" />
              <label htmlFor="inp_check_q01">
                <span>피부계통</span>
              </label>
            </li>
          </ul>
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