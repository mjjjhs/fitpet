import * as React from 'react';
import {CheckListStyle, CommonStyle} from "../../Styles";
import {ICheckList} from "../../Interface/Props";

function CheckList({curQuestionNum, totalQuestionLength, title, notice, data}: ICheckList) {
  return (
    <div className="cont type1">
      <div className="head">
        <em>Q{curQuestionNum}.</em>
        <div className="page">{curQuestionNum}/{totalQuestionLength}</div>
      </div>
      <div className="tit">
        <h3>{title}</h3>
        {
          notice &&
            <p className="notice">{notice}</p>
        }
      </div>
      <ul className="list_option">
        <li>
          <input type="checkbox" id={`inp_check_q01_01`} className="inp_check" />
          <label htmlFor={`inp_check_q01_01`}>
            <img src="images/skin-system@3x.png" />
            <span>피부계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id={`inp_check_q01_02`} className="inp_check" />
          <label htmlFor={`inp_check_q01_02`}>
            <img src="images/digestive-system@3x.png" />
            <span>소화계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id={`inp_check_q01_03`} className="inp_check" />
          <label htmlFor={`inp_check_q01_03`}>
            <img src="images/articular-system@3x.png" />
            <span>관절계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id={`inp_check_q01_04`} className="inp_check" />
          <label htmlFor={`inp_check_q01_04`}>
            <img src="images/ophthalmic-system@3x.png" />
            <span>안과계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id={`inp_check_q01_05`} className="inp_check" />
          <label htmlFor={`inp_check_q01_05`}>
            <img src="images/respiratory-system@3x.png" />
            <span>호흡기계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id={`inp_check_q01_06`} className="inp_check" />
          <label htmlFor={`inp_check_q01_06`}>
            <img src="images/urinary-system@3x.png" />
            <span>비뇨계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id={`inp_check_q01_07`} className="inp_check" />
          <label htmlFor={`inp_check_q01_07`}>
            <img src="images/nervous-system@3x.png" />
            <span>순환계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id={`inp_check_q01_08`} className="inp_check" />
          <label htmlFor={`inp_check_q01_08`}>
            <img src="images/oral-system@3x.png" />
            <span>구강계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id={`inp_check_q01_09`} className="inp_check" />
          <label htmlFor={`inp_check_q01_09`}>
            <img src="images/ico_x.svg" />
            <span>없어요!</span>
          </label>
        </li>
      </ul>
      <style jsx>{CommonStyle}</style>
      <style jsx>{CheckListStyle}</style>
    </div>
  );
}


export default CheckList;

