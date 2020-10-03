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
        <img src="images/dr_01.png"
            srcSet="images/dr_01@2x.png 320w,
                    images/dr_01@3x.png 768w"
            sizes="(max-width: 319px) 192px,
                    (max-width: 767px) 256px,
                    512px"
        />
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
              <input type="checkbox" id="inp_check_q01_01" className="inp_check" />
              <label htmlFor="inp_check_q01_01">
                <img src="images/skin-system@3x.png" className="img_type1" />
                <span>피부계통</span>
              </label>
            </li>
            <li>
              <input type="checkbox" id="inp_check_q01_02" className="inp_check" />
              <label htmlFor="inp_check_q01_02">
                <img src="images/digestive-system@3x.png" className="img_type1" />
                <span>소화계통</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="cont type2">
          <div className="head">
            <em>Q14.</em>
            <div className="page">14/18</div>
          </div>
          <div className="tit">
            <h3>선호하는 사료 크기를 선택해 주세요</h3>
          </div>
          <ul className="list_option">
            <li>
              <input type="radio" name="inp_radio_q14" id="inp_radio_q14_01" className="inp_radio" />
              <label htmlFor="inp_radio_q14_01">
                <img src="images/ico_1@3x.png" alt="1번" className="img_type1" />
                <span>피부계통</span>
              </label>
            </li>
            <li>
              <input type="radio" name="inp_radio_q14" id="inp_check_q14_02" className="inp_radio" />
              <label htmlFor="inp_check_q14_02">
                <img src="images/ico_2@3x.png" alt="2번" className="img_type1" />
                <span>소화계통</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="cont type3">
          <h3>물컵</h3>
        </div>
        <div className="cont type4">
          <div className="head">
            <em>Q6.</em>
            <div className="page">6/18</div>
          </div>
          <div className="tit">
            <h3>평소 음식을 먹을 때 급하게 먹는 편인가요?</h3>
          </div>
          <ul className="list_option">
            <li>
              <input type="radio" name="inp_radio_q06" id="inp_radio_q06_01" className="inp_radio" />
              <label htmlFor="inp_radio_q06_01">
                <img src="images/ico_1@3x.png" alt="1번" className="img_type1" />
                <span>피부계통</span>
              </label>
            </li>
            <li>
              <input type="radio" name="inp_radio_q06" id="inp_radio_q06_02" className="inp_radio" />
              <label htmlFor="inp_radio_q06_02">
                <img src="images/ico_2@3x.png" alt="2번" className="img_type1" />
                <span>소화계통</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="cont type5">
          <h3>range</h3>
        </div>
      </Slider>
      <style jsx>{ContentStyle}</style>
    </div>
  );
}

export default Content;