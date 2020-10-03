import * as React from 'react';
import Container from './Layouts/Container';
import ResetStyle from './Styles/Reset';
import CommonStyle from './Styles/Common';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <React.Fragment>
      <Container />
      <style jsx>{ResetStyle}</style>
      <style jsx>{CommonStyle}</style>
    </React.Fragment>
  );
}


export default App;