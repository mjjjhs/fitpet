import * as React from 'react';
import {RadioListStyle, CommonStyle} from "../../Styles";
import {IRadioList} from "../../Interface/Props";

function RadioList({type, curQuestionNum, totalQuestionLength, title, data}: IRadioList) {
  return (
    <div className={`cont ${type === 'list' ? 'type2' : 'type4'}`}>
      <div className="head">
        <em>Q{curQuestionNum}.</em>
        <div className="page">{curQuestionNum}/{totalQuestionLength}</div>
      </div>
      <div className="tit">
        <h3>{title}</h3>
      </div>
      <ul className="list_option">
        {
          type === 'list' ?
            <React.Fragment>
              {
                data &&
                  data.map((item, idx) =>
                    <li key={idx}>
                      <input type="radio" name={`inp_radio_q${curQuestionNum}`} id={`inp_radio_q${curQuestionNum}_${idx}`} className="inp_radio" />
                      <label htmlFor={`inp_radio_q${curQuestionNum}_${idx}`} >
                        {
                          item.imgSrc &&
                            <img src={item.imgSrc} alt={`${idx+1}번`} />
                        }
                        <span>{item.text}</span>
                      </label>
                    </li>
                  )
              }
            </React.Fragment> :
            <React.Fragment>
              {
                data &&
                  data.map((item, idx) =>
                    <li key={idx}>
                      <input type="radio" name={`inp_radio_q${curQuestionNum}`} id={`inp_radio_q${curQuestionNum}_${idx}`} className="inp_radio" />
                      <label htmlFor={`inp_radio_q${curQuestionNum}_${idx}`}>
                        {
                          item.imgSrc &&
                            <img src={item.imgSrc} alt={`${idx+1}번`} />
                        }
                        <span>{item.text}</span>
                      </label>
                    </li>
                  )
              }
            </React.Fragment>
        }
      </ul>
      <style jsx>{CommonStyle}</style>
      <style jsx>{RadioListStyle}</style>
    </div>
  );
}

export default RadioList;

