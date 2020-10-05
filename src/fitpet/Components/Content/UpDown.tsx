import * as React from 'react';
import {UpDownStyle, CommonStyle} from "../../Styles";
import {IUpDown} from "../../Interface/Props";
import {EContent} from "../../Enums/Text";
import {EScroll} from "../../Enums/Config";
import Scrollbar from "react-scrollbars-custom";

function UpDown({title, notice, curQuestionNum, totalQuestionLength, innerScrollHeight}: IUpDown) {
  return (
    <div className="cont type3">
      <div className="head">
        <em>Q{curQuestionNum}.</em>
        <div className="page">{curQuestionNum}/{totalQuestionLength}</div>
      </div>
      <div className="tit">
        <h3>
          {title[0]}
          <br />
          {title[1]}
        </h3>
        {
          notice &&
            <p className="notice">{notice}</p>
        }
      </div>
      <Scrollbar
        trackYProps={{
          renderer: props => {
            const { elementRef, ...restProps } = props;
            restProps.style.width = EScroll.SCROLL_WIDTH;
            return <span {...restProps} ref={elementRef} className="trackY"  />;
          }
        }}
        removeTracksWhenNotUsed={true}
        noScrollX={true}
        style={{ height: EScroll.HEIGHT }}
      >
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
            <span className="screen_out">1/3{EContent.CUP} {EContent.SUBTRACTION}</span>
          </button>
          <div className="txt_info">
            1, 2<span className="txt_bar">/</span>3{EContent.CUP}
          </div>
          <button type="button" className="btn_up">
            <span className="screen_out">1/3{EContent.CUP} {EContent.ADDITION}</span>
          </button>
        </div>
      </Scrollbar>
      <style jsx>{CommonStyle}</style>
      <style jsx>{UpDownStyle}</style>
    </div>
  );
}

export default UpDown;

