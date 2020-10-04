import * as React from 'react';
import {RadioListStyle, CommonStyle} from "../../Styles";

function RadioList({type}: {type: string}) {
  return (
    <div className={`cont ${type === 'img' ? 'type2' : 'type4'}`}>
      <div className="head">
        <em>Q14.</em>
        <div className="page">14/18</div>
      </div>
      <div className="tit">
        <h3>선호하는 사료 크기를 선택해 주세요</h3>
      </div>
      <ul className="list_option">
        {
          type === 'img' ?
            <React.Fragment>
              <li>
                <input type="radio" name="inp_radio_q14" id="inp_radio_q14_01" className="inp_radio" />
                <label htmlFor="inp_radio_q14_01">
                  <img src="images/ico_1@3x.png" alt="1번" />
                  <span>작은 입자 8mm 미만</span>
                </label>
              </li>
              <li>
                <input type="radio" name="inp_radio_q14" id="inp_check_q14_02" className="inp_radio" />
                <label htmlFor="inp_check_q14_02">
                  <img src="images/ico_2@3x.png" alt="2번" />
                  <span>보통 입자 8~13mm</span>
                </label>
              </li>
              <li>
                <input type="radio" name="inp_radio_q14" id="inp_check_q14_03" className="inp_radio" />
                <label htmlFor="inp_check_q14_03">
                  <img src="images/ico_3@3x.png" alt="3번" />
                  <span>큰 입자 13mm 이상</span>
                </label>
              </li>
            </React.Fragment> :
            <React.Fragment>
              <li>
                <input type="radio" name="inp_radio_q06" id="inp_radio_q06_01" className="inp_radio" />
                <label htmlFor="inp_radio_q06_01">
                  <img src="images/dog_yes@3x.png" alt="1번" className="img_type4" />
                  <span>네, 조금 급하게 먹어요</span>
                </label>
              </li>
              <li>
                <input type="radio" name="inp_radio_q06" id="inp_radio_q06_02" className="inp_radio" />
                <label htmlFor="inp_radio_q06_02">
                  <img src="images/dog_no@3x.png" alt="2번" className="img_type4" />
                  <span>아니오, 그렇지 않아요</span>
                </label>
              </li>
            </React.Fragment>
        }
      </ul>
      <style jsx>{CommonStyle}</style>
      <style jsx>{RadioListStyle}</style>
    </div>
  );
}

export default RadioList;

