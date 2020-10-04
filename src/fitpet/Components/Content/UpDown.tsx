import * as React from 'react';
import {UpDownStyle, CommonStyle} from "../../Styles";

function UpDown() {
  return (
    <div className="cont type3">
      <div className="head">
        <em>Q4.</em>
        <div className="page">4/18</div>
      </div>
      <div className="tit">
        <h3>하루 총 몇 컵의 사료를 급여하시나요?</h3>
        <p className="notice">종이컵 기준</p>
      </div>
      <ul className="list_option">
        <li>
          <img src="images/cup_full@3x.png" alt="1컵" />
        </li>
        <li>
          <img src="images/cup_3-2@3x.png" alt="2/3컵" />
        </li>
        <li>
          <img src="images/cup_3-1@3x.png" alt="1/3컵" />
        </li>
      </ul>
      <div className="wrap_info">
        <button type="button" className="btn_down">
          <span className="screen_out">1/3컵 빼기</span>
        </button>
        <div className="txt_info">
          1, 2<span className="txt_bar">/</span>3<strong>컵</strong>
        </div>
        <button type="button" className="btn_up">
          <span className="screen_out">1/3컵 더하기</span>
        </button>
      </div>
      <style jsx>{CommonStyle}</style>
      <style jsx>{UpDownStyle}</style>
    </div>
  );
}

export default UpDown;

