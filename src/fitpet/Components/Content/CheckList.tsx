import * as React from 'react';
import {CheckListStyle, CommonStyle} from "../../Styles";

function CheckList() {
  return (
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
            <img src="images/skin-system@3x.png" />
            <span>피부계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="inp_check_q01_02" className="inp_check" />
          <label htmlFor="inp_check_q01_02">
            <img src="images/digestive-system@3x.png" />
            <span>소화계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="inp_check_q01_03" className="inp_check" />
          <label htmlFor="inp_check_q01_03">
            <img src="images/articular-system@3x.png" />
            <span>관절계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="inp_check_q01_04" className="inp_check" />
          <label htmlFor="inp_check_q01_04">
            <img src="images/ophthalmic-system@3x.png" />
            <span>안과계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="inp_check_q01_05" className="inp_check" />
          <label htmlFor="inp_check_q01_05">
            <img src="images/respiratory-system@3x.png" />
            <span>호흡기계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="inp_check_q01_06" className="inp_check" />
          <label htmlFor="inp_check_q01_06">
            <img src="images/urinary-system@3x.png" />
            <span>비뇨계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="inp_check_q01_07" className="inp_check" />
          <label htmlFor="inp_check_q01_07">
            <img src="images/nervous-system@3x.png" />
            <span>순환계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="inp_check_q01_08" className="inp_check" />
          <label htmlFor="inp_check_q01_08">
            <img src="images/oral-system@3x.png" />
            <span>구강계통</span>
          </label>
        </li>
        <li>
          <input type="checkbox" id="inp_check_q01_09" className="inp_check" />
          <label htmlFor="inp_check_q01_09">
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

