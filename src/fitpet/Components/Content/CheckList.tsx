import * as React from 'react';
import {CheckListStyle, CommonStyle} from "../../Styles";
import {ICheckList} from "../../Interface/Props";
import Scrollbar from "react-scrollbars-custom";
import {EScroll} from "../../Enums/Config";

function CheckList({curQuestionNum, totalQuestionLength, title, notice, data, innerScrollHeight}: ICheckList) {
  return (
    <div className="cont type1">
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
            {
              data &&
                data.map((item, idx): JSX.Element =>
                  <li key={idx}>
                    <input type="checkbox" id={`inp_check_q${curQuestionNum}_${idx}`} className="inp_check" />
                    <label htmlFor={`inp_check_q${curQuestionNum}_${idx}`}>
                      {
                        item.imgSrc &&
                          <img src={item.imgSrc} />
                      }
                      <span>{item.text}</span>
                    </label>
                  </li>
                )
            }
        </ul>
      </Scrollbar>
      <style jsx>{CommonStyle}</style>
      <style jsx>{CheckListStyle}</style>
    </div>
  );
}

export default CheckList;

