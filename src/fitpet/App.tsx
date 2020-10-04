import * as React from 'react';
import Container from './Layouts/Container';
import {CommonStyle, ResetStyle} from './Styles';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { withOrientationChange } from 'react-device-detect';

let App = props => {
  const { isLandscape, isPortrait } = props;
  return (
    <React.Fragment>
      <Container
        isLandscape={isLandscape}
        isPortrait={isPortrait}
      />
      <style jsx>{ResetStyle}</style>
      <style jsx>{CommonStyle}</style>
    </React.Fragment>
  );
}

App = withOrientationChange(App)

export default App;