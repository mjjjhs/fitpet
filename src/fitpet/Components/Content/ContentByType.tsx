import * as React from 'react';
import {CommonStyle, ContentByTypeStyle} from "../../Styles";
import {IContent} from "../../Interface/Props";
import Scrollbar from "react-scrollbars-custom";
import {EScroll} from "../../Enums/Config";
import Title from "./Title";
import {Range, UpDown} from "./index";
import {useEffect, useRef, useState} from "react";

/* Q1 */
function ContentByType({
                    curQuestionNum,
                    totalQuestionLength,
                    title,
                    notice,
                    data,
                    targetName,
                    typeName,
                    type,
                    min,
                    max
}: IContent) {

  const refs = useRef<HTMLInputElement>();
  const prefix = !typeName ? 'inp_radio_q' : 'inp_check_q';
  const [isDirectly, setIsDirectly] = useState<boolean>(false);
  const [directlyValue, setDirectlyValue] = useState<string>('');
  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsDirectly(e.target.checked);
  };
  const handleChangeTextInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDirectlyValue(e.target.value);
  };
  useEffect(() => {
    if(!refs?.current) {
      return;
    }
    if(isDirectly) {
      refs.current.focus();
    } else {
      setDirectlyValue('');
    }
  }, [isDirectly]);

  return (
    <div className={!typeName ? `cont ${type === 'list' ? 'type2' : (type === 'slimList' ? 'type1' : 'type4')}` : `cont${typeName ? ` ${typeName}` : ''}`}>
      <Title
        curQuestionNum={curQuestionNum}
        totalQuestionLength={totalQuestionLength}
        title={title}
        notice={notice}
        targetName={targetName}
      />
      <Scrollbar
        trackYProps={{
          renderer: props => {
            const { elementRef, ...restProps } = props;
            restProps.style.width = EScroll.SCROLL_WIDTH;
            return <span {...restProps} ref={elementRef} className="trackY" />;
          }
        }}
        removeTracksWhenNotUsed={true}
        noScrollX={true}
        style={{ height: EScroll.HEIGHT }}
      >
        {
          typeName?.includes('type5') &&
            <Range min={min || 3} max={max || 15} />
        }
        {
          typeName?.includes('type3') &&
            <UpDown />
        }
        {
          (!typeName?.includes('type5') && !typeName?.includes('type3')) &&
            <ul className="list_option">
              {
                data &&
                data.map((item, idx): JSX.Element =>
                  <li key={idx}>
                    <input
                      type={!typeName ? 'radio' : 'checkbox'}
                      name={!typeName ? `inp_radio_q${curQuestionNum}` : ''}
                      id={`${prefix}${curQuestionNum}_${idx}`}
                      className={!typeName ? 'inp_radio' : 'inp_check'}
                    />
                    <label htmlFor={`${prefix}${curQuestionNum}_${idx}`}>
                      {
                        item.imgSrc &&
                        <img src={item.imgSrc} alt={`${idx+1}번`} />
                      }
                      <span>{item.text}</span>
                      {
                        item.subText &&
                        <span className="sub_text">{item.subText}</span>
                      }
                    </label>
                  </li>
                )
              }
              {
                typeName?.includes('type8') &&
                  <React.Fragment>
                      <li>
                          <input type="checkbox" id="inp_check_q11_txt" className="inp_check" onChange={handleChecked} />
                          <label htmlFor="inp_check_q11_txt">
                              <span>직접입력</span>
                          </label>
                      </li>
                      <li className="lst_txt">
                          <input
                              ref={refs}
                              type="text"
                              className="inp_txt"
                              placeholder="사료 이름을 입력해 주세요!" value={directlyValue} disabled={!isDirectly}
                              onChange={handleChangeTextInput}
                          />
                      </li>
                  </React.Fragment>
              }
            </ul>
        }
      </Scrollbar>
      <style jsx>{ContentByTypeStyle}</style>
    </div>
  );
}

export default ContentByType;
