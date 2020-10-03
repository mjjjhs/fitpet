import * as React from "react";
import ContentStyle from "../Styles/ContentStyle";
import Slider from "react-slick";
import { Slider as CompoundSlider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import {CSSProperties, useState} from "react";
import { SliderRail, Handle, Track } from './CompoundSlider'

const sliderStyle: CSSProperties = {
  position: 'relative',
  width: '100%'
};

const defaultValues = [2, 15];

const settings: {
  className: string,
  arrows: boolean,
  dots: boolean,
  infinite: boolean,
  speed: number,
  slidesToShow: number,
  centerMode: boolean,
  centerPadding: string,
  adaptiveHeight: boolean
} = {
  className: "slider_box",
  arrows: false,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "20px",
  adaptiveHeight: true,
};

function Content() {
  const [compoundSliderOpts, setCompoundSlideruOpts] = useState<{
    domain: [any, any],
    values: number[],
    update: number[],
    reversed: boolean
  }>({
    domain: [defaultValues[0], defaultValues[1]],
    values: defaultValues.slice(),
    update: defaultValues.slice(),
    reversed: false,
  });

  const onChangeCompundSlider = (values): void => setCompoundSlideruOpts({
    ...compoundSliderOpts,
    values: [...values]
  });

  const onUpdateCompundSlider = (values): void => setCompoundSlideruOpts({
    ...compoundSliderOpts,
    update: [...values]
  });

  return (
    <div className="content">
      <section className="feature_dr">
        <img src="images/dr_01.png"
             srcSet="images/dr_01@2x.png 320w,
                    images/dr_01@3x.png 768w"
             sizes="(max-width: 319px) 192px,
                    (max-width: 767px) 256px,
                    512px"
        />
      </section>
      <Slider {...settings}>
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
                <img src="images/skin-system@3x.png" className="img_type1" />
                <span>피부계통</span>
              </label>
            </li>
            <li>
              <input type="checkbox" id="inp_check_q01_02" className="inp_check" />
              <label htmlFor="inp_check_q01_02">
                <img src="images/digestive-system@3x.png" className="img_type1" />
                <span>소화계통</span>
              </label>
            </li>
          </ul>
        </div>
        <div className="cont type2">
          <div className="head">
            <em>Q14.</em>
            <div className="page">14/18</div>
          </div>
          <div className="tit">
            <h3>선호하는 사료 크기를 선택해 주세요</h3>
          </div>
          <ul className="list_option">
            <li>
              <input type="radio" name="inp_radio_q14" id="inp_radio_q14_01" className="inp_radio" />
              <label htmlFor="inp_radio_q14_01">
                <img src="images/ico_1@3x.png" alt="1번" className="img_type1" />
                <span>피부계통</span>
              </label>
            </li>
            <li>
              <input type="radio" name="inp_radio_q14" id="inp_check_q14_02" className="inp_radio" />
              <label htmlFor="inp_check_q14_02">
                <img src="images/ico_2@3x.png" alt="2번" className="img_type1" />
                <span>소화계통</span>
              </label>
            </li>
          </ul>
        </div>
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
              <img src="images/cup_full@3x.png" alt="1컵" className="img_type3" />
            </li>
            <li>
              <img src="images/cup_3-2@3x.png" alt="2/3컵" className="img_type3" />
            </li>
            <li>
              <img src="images/cup_3-1@3x.png" alt="1/3컵" className="img_type3" />
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
        </div>
        <div className="cont type4">
          <div className="head">
            <em>Q6.</em>
            <div className="page">6/18</div>
          </div>
          <div className="tit">
            <h3>평소 음식을 먹을 때 급하게 먹는 편인가요?</h3>
          </div>
          <ul className="list_option">
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
          </ul>
        </div>
        <div className="cont type5">
          <CompoundSlider
            mode={2}
            step={1}
            domain={compoundSliderOpts?.domain}
            reversed={compoundSliderOpts?.reversed}
            rootStyle={sliderStyle}
            onUpdate={onUpdateCompundSlider}
            onChange={onChangeCompundSlider}
            values={compoundSliderOpts?.values}
          >
            <Rail>
              {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
            </Rail>
            <Handles>
              {({ handles, getHandleProps }) => (
                <div className="slider-handles">
                  {handles.map(handle => (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      domain={compoundSliderOpts?.domain}
                      getHandleProps={getHandleProps}
                    />
                  ))}
                </div>
              )}
            </Handles>
            <Tracks left={false} right={false}>
              {({ tracks, getTrackProps }) => (
                <div className="slider-tracks">
                  {tracks.map(({ id, source, target }) => (
                    <Track
                      key={id}
                      source={source}
                      target={target}
                      getTrackProps={getTrackProps}
                    />
                  ))}
                </div>
              )}
            </Tracks>
          </CompoundSlider>
          <h2 className="price-period">{compoundSliderOpts?.update[0]}만원 ~ {compoundSliderOpts?.update[1]}만원</h2>
        </div>
      </Slider>
      <style jsx>{ContentStyle}</style>
    </div>
  );
}

export default Content;