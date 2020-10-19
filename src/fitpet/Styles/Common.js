import css from 'styled-jsx/css';
export default css.global`

/* font */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
@font-face {
    font-family: 'gilroyextrabold';
    src: url('fonts/gilroy-extrabold-webfont.woff2') format('woff2'),
         url('fonts/gilroy-extrabold-webfont.woff') format('woff');
    font-weight: 800;
    font-style: normal;
}

@font-face {
    font-family: 'gilroylight';
    src: url('fonts/gilroy-light-webfont.woff2') format('woff2'),
         url('fonts/gilroy-light-webfont.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

/* variable */
$primary: #2b51a2 !default;
$grey: #999 !default;

/* style */
.inp_radio,
.inp_check {
  display: none;

  & + label {
    display: flex;
    align-item: center;
    width: 100%;
    min-height: 48px;
    padding: 14px 12px;
    border-radius: 10px;
    background-color: #f7f7fb;
    cursor: pointer;

    span {
      display: block;
      font-weight: bold;
      line-height: 20px;
      word-break: keep-all;
    }
  }

  &:checked + label {
    background: #e3eaf5 url(images/check@3x.png) right 12px center no-repeat;
    background-size: 20px auto;
  }
}

.list_option {
  li:not(:first-child) {
    margin-top: 5px;
  }
}

.slider_box {
  .slick-slide {
    padding: 20px 6px 40px;
  }

  .cont {
    height: 368px;
    padding: 20px 20px 32px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.1);
    line-height: 24px;
    &:focus {
      outline: none;
    }
  }

  .head {
    display: flex;
    justify-content: space-between;
    align-item: center;
  }

  .tit {
    min-height: 70px;
    margin-top: 4px;
    margin-bottom: 12px;
  }

  em {
    display: block;
    height: 20px;
    font-size: 20px;
    font-family: 'gilroyextrabold', 'Apple SD Gothic Neo', 'helvetica neue', san-serif;
    font-weight: 800;
    color: $primary;
  }

  .ellipsis {
    display: inline-block;
    width: 70px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: top;
  }

  .page {
    font-family: 'gilroylight', 'Apple SD Gothic Neo', 'helvetica neue', san-serif;
    font-size: 15px;
    text-align: right;
    color: $grey;
  }

  h3 {
    display: block;
    font-size: 20px;
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

.ball {
  position: relative;
  width: 26px;
  height: 26px;

  .active {
    &:after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 10px;
      height: 10px;
      margin: -5px 0 0 -5px;
      border-radius: 50%;
      background-color: #154cae;
      z-index: 100;
    }
  }
}

/* 20201018 수정사항적용 공통 */
.type_new {
  .list_option {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-item: center;
    margin-right: -4px;
    margin-left: -4px;

    li {
      width: 50%;
      padding: 0 4px;

      &:nth-of-type(2) {
        margin-top: 0;
      }
    }

    .inp_check,
    .inp_radio {
      & + label {
        align-item: center;

        span {
          font-size: 14px;
        }
      }

      &:checked + label {
        background: #e3eaf5;
        background-image: none;
      }

    }
  }
}
input[type="text"]:focus {
    -webkit-text-size-adjust: 100%;
}
`;