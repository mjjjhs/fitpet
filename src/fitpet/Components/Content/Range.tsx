import * as React from 'react';
import {CommonStyle, ContentByTypeStyle} from "../../Styles";
import {Handles, Rail, Slider as CompoundSlider, Tracks} from "react-compound-slider";
import {Handle, SliderRail, Track} from "../CompoundSlider";
import {CSSProperties, useState} from "react";
import {IContent} from "../../Interface/Props";
import {EContent} from "../../Enums/Text";

const sliderStyle: CSSProperties = {
  position: 'relative',
  width: '100%'
};

function Range({min, max}: IContent) {
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
    <React.Fragment>
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
      <style jsx>{CommonStyle}</style>
      <style jsx>{ContentByTypeStyle}</style>
    </React.Fragment>
  );
}

export default Range;