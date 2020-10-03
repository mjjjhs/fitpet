import css from 'styled-jsx/css';
export default css.global`
  /* font */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
  @import url('../Fonts/Gilroy-ExtraBold.otf');
  @import url('../Fonts/Gilroy-Light.otf');

  .slider_q {
    
    .slick-slide {
      /* min-width: 268px; */
      padding: 20px 6px 40px;
    }

    .cont {
      min-height: 368px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
    }
  }
`;