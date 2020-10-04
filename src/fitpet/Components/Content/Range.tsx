import * as React from 'react';
import {RangeStyle, CommonStyle} from "../../Styles";
import {Handles, Rail, Slider as CompoundSlider, Tracks} from "react-compound-slider";
import {Handle, SliderRail, Track} from "../CompoundSlider";
import {CSSProperties, useState} from "react";

const sliderStyle: CSSProperties = {
  position: 'relative',
  width: '100%'
};

const defaultValues = [2, 15];

function Range() {
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
        <em>Q12.</em>
        <div className="page">12/18</div>
      </div>
      <div className="tit">
        <h3>선호하는 사료 가격대를 선택해 주세요</h3>
        <p className="notice">최대 2만원 ~ 최대 15만원 사이</p>
      </div>
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
      </div>
      <h2 className="price-period txt_bar">
        {compoundSliderOpts?.update[0]}만원 <span className="txt_bar">~</span> {compoundSliderOpts?.update[1]}만원
      </h2>
      <style jsx>{CommonStyle}</style>
      <style jsx>{RangeStyle}</style>
    </div>
  );
}

export default Range;