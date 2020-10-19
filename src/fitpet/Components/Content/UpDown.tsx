import * as React from 'react';
import {CommonStyle, ContentByTypeStyle} from "../../Styles";
import {EContent} from "../../Enums/Text";

function UpDown() {
  return (
    <React.Fragment>
      <ul className="list_option">
        <li>
          <img src="images/cup_full@3x.png" alt="1컵" />
        </li>
        <li>
          <img src="images/cup_4-3@3x.png" alt="3/4컵" />
        </li>
        <li>
          <img src="images/cup_4-2@3x.png" alt="2/4컵" />
        </li>
        <li>
          <img src="images/cup_4-1@3x.png" alt="1/4컵" />
        </li>
        {/* <li>
            <img src="images/cup_4-1@3x.png" alt="1/4컵" />
          </li>
          <li>
            <img src="images/cup_4-0@3x.png" alt="모름" />
          </li> */}
      </ul>
      <div className="wrap_info">
        <button type="button" className="btn_down">
          <span className="screen_out">1/4{EContent.CUP} {EContent.SUBTRACTION}</span>
        </button>
        <div className="txt_info">
          1, 3<span className="txt_bar">/</span>4{EContent.CUP}
        </div>
        <button type="button" className="btn_up">
          <span className="screen_out">1/4{EContent.CUP} {EContent.ADDITION}</span>
        </button>
      </div>
      <style jsx>{CommonStyle}</style>
      <style jsx>{ContentByTypeStyle}</style>
    </React.Fragment>
  );
}

export default UpDown;
