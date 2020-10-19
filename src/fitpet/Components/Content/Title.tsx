import * as React from 'react';
import {CommonStyle} from "../../Styles";
import {ITitle} from "../../Interface/Props";
import {EContent, ENotice} from "../../Enums/Text";

function Title({curQuestionNum, totalQuestionLength, title, notice, targetName, min, max}: ITitle) {
  return (
    <React.Fragment>
      <div className="head">
        <em>Q{curQuestionNum}.</em>
        <div className="page">{curQuestionNum}/{totalQuestionLength}</div>
      </div>
      <div className="tit">
        <h3>
          {
            targetName &&
            <strong className={targetName.length > 3 ? 'ellipsis' : ''} >
              {targetName}
            </strong>
          }
          {title[0]}
          <br />
          {title[1]}
        </h3>
        {
          ((max && min) || notice) &&
          <p className="notice">
            {
              max && min ?
                `${ENotice.MIN} ${min}${EContent.WON} ~ ${ENotice.MAX} ${max}${EContent.WON} ${ENotice.BETWEEN}`
                :
                notice
            }
          </p>
        }
      </div>
      <style jsx>{CommonStyle}</style>
    </React.Fragment>
  );
}

export default Title;