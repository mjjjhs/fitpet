import React, {CSSProperties, Fragment} from 'react'
import PropTypes from 'prop-types'

// *******************************************************
// RAIL
// *******************************************************
const railOuterStyle: CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: 26,
  transform: 'translate(0%, -50%)',
  borderRadius: 8,
  cursor: 'pointer',
}

const railInnerStyle: CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: 6,
  transform: 'translate(0%, -50%)',
  borderRadius: 8,
  pointerEvents: 'none',
  backgroundColor: '#f7f7fc',
}

export function SliderRail({ getRailProps }) {
  return (
    <Fragment>
      <div style={railOuterStyle} {...getRailProps()} />
      <div style={railInnerStyle} />
    </Fragment>
  )
}

SliderRail.propTypes = {
  getRailProps: PropTypes.func.isRequired,
}

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
export function Handle({
                         domain: [min, max],
                         handle: { id, value, percent },
                         disabled,
                         getHandleProps,
                       }) {
  return (
    <Fragment>
      <div
        style={{
          left: `${percent}%`,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          WebkitTapHighlightColor: 'rgba(0,0,0,0)',
          zIndex: 5,
          width: 26,
          height: 26,
          cursor: 'pointer',
          backgroundColor: 'none',
        }}
        {...getHandleProps(id)}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          left: `${percent}%`,
          position: 'absolute',
          transform: 'translate(-50%, -50%)',
          zIndex: 2,
          width: 26,
          height: 26,
          borderRadius: '50%',
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.2)',
          backgroundColor: disabled ? '#eee' : '#fff',
        }}
      />
    </Fragment>
  )
}

Handle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

Handle.defaultProps = {
  disabled: false,
}

// *******************************************************
// KEYBOARD HANDLE COMPONENT
// Uses a button to allow keyboard events
// *******************************************************
export function KeyboardHandle({
                                 domain: [min, max],
                                 handle: { id, value, percent },
                                 disabled,
                                 getHandleProps,
                               }) {
  return (
    <button
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      style={{
        left: `${percent}%`,
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        zIndex: 2,
        width: 24,
        height: 24,
        borderRadius: '50%',
        boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.3)',
        backgroundColor: disabled ? '#666' : '#ffc400',
      }}
      {...getHandleProps(id)}
    />
  )
}

KeyboardHandle.propTypes = {
  domain: PropTypes.array.isRequired,
  handle: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  getHandleProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

KeyboardHandle.defaultProps = {
  disabled: false,
}

// *******************************************************
// TRACK COMPONENT
// *******************************************************
export function Track({ source, target, getTrackProps, disabled }) {
  return (
    <div
      style={{
        position: 'absolute',
        transform: 'translate(0%, -50%)',
        height: 6,
        zIndex: 1,
        backgroundColor: disabled ? '#f7f7fc' : '#224fa8',
        borderRadius: 8,
        cursor: 'pointer',
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  )
}

Track.propTypes = {
  source: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  target: PropTypes.shape({
    id: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    percent: PropTypes.number.isRequired,
  }).isRequired,
  getTrackProps: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

Track.defaultProps = {
  disabled: false,
}