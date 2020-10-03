import css from 'styled-jsx/css';
export default css.global`
  /* font */
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
  @import url('fonts/Gilroy-ExtraBold.otf');
  @import url('fonts/Gilroy-Light.otf');
  $primary: #2b51a2 !default;
  $grey: #999 !default;
  @mixin wh($num) {
    width: $num;
    height: $num;
  }
  .inp_check {
    display: none;
    & + label {
      display: inline-block;
      width: 100%;
      height: 48px;
      padding: 12px;
      border-radius: 10px;
      background-color: #f7f7fb;
      cursor: pointer;
      span {
        font-size: 14px;
        font-weight: bold;
        line-height: 20px;
      }
    }
    &:checked + label {
      background-color: #e3eaf5;
    }
    
  }
  .slider_box {
    .slick-slide {
      padding: 20px 6px 40px;
    }
    .cont {
      min-height: 368px;
      padding: 20px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
      line-height: 24px;
    }
    .head {
      display: flex;
      justify-content: space-between;
      align-item: center;
      margin-bottom: 12px;
    }
    .tit {
      margin-top: 4px;
      margin-bottom: 12px;
    }
    em {
      display: block;
      height: 20px;
      font-size: 20px;
      font-family: 'Gilroy';
      font-weight: 800;
      color: $primary;
    }
    .page {
      font-family: 'Gilroy';
      font-size: 15px;
      text-align: right;
      color: $grey;
    }
    
    h3 {
      display: block;
      font-size:18px;
      font-wieght: bold;
      word-break: keep-all;
    }
    .notice {
      margin-top: 8px;
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      color: $grey;
    }
    
  }
`;