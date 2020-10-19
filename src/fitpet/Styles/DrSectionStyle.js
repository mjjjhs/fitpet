import css from 'styled-jsx/css';
export default css`
  .feature_dr {
    position: relative;
    width: 100%;
    height: 184px;
    text-align: center;

    .inner {
      position: absolute;
      top: 20px;
      left: 50%;
      margin-left: -92px;
      z-index: 2;
    }

    img {
      display: block;
      margin: 0 auto;
    }
  }
`;