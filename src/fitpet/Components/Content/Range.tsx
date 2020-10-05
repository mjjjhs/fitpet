import * as React from 'react';
import {RangeStyle, CommonStyle} from "../../Styles";
import {Handles, Rail, Slider as CompoundSlider, Tracks} from "react-compound-slider";
import {Handle, SliderRail, Track} from "../CompoundSlider";
import {CSSProperties, useState} from "react";
import {IRange} from "../../Interface/Props";
import {EContent, ENotice} from "../../Enums/Text";
// import { Scrollbars } from 'react-custom-scrollbars';

const sliderStyle: CSSProperties = {
  position: 'relative',
  width: '100%'
};

function Range({title, min, max, curQuestionNum, totalQuestionLength, innerScrollHeight}: IRange) {
  const defaultValues = [min, max];
  const [active, setActive] = useState<{left: boolean, right: boolean}>({
    left: false,
    right: false
  });
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
    <div className="cont type5">
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
        <p className="notice">
          {
            `${ENotice.MIN} ${min}${EContent.WON} ~ ${ENotice.MAX} ${max}${EContent.WON} ${ENotice.BETWEEN}`
          }
        </p>
      </div>
      {/*<Scrollbars style={{height: innerScrollHeight || 0}}>*/}
        <div className="range">
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
                  {handles.map((handle, idx) => (
                    <Handle
                      key={handle.id}
                      handle={handle}
                      isLeft={!idx && true}
                      active={active}
                      setActive={setActive}
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
        </div>
        <h2 className="price-period txt_bar">
          {compoundSliderOpts?.update[0]}{EContent.WON}
          <span className="txt_bar"> ~ </span>
          {compoundSliderOpts?.update[1]}{EContent.WON}
        </h2>
      {/*</Scrollbars>*/}
      <style jsx>{CommonStyle}</style>
      <style jsx>{RangeStyle}</style>
    </div>
  );
}

export default Range;