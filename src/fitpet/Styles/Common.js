import css from 'styled-jsx/css';
export default css.global`

/* font */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap');
@import url('fonts/Gilroy-ExtraBold.otf');
@import url('fonts/Gilroy-Light.otf');

/* variable */
$primary: #2b51a2 !default;
$grey: #999 !default;

/* mixin */
@mixin wh($px) {
  width: $px;
  height: $px;
  margin-right: 8px;
}

@mixin py($px) {
  padding-top: $px;
  padding-bottom: $px;
}

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
    background: #e3eaf5 url(../images/check@3x.png) right 12px center no-repeat;
    background-size: 20px auto;
  }
}

.img_type1 {
  @include wh(20px);
}

.img_type3 {
  width: 72px;
  height: 88px;
}

.img_type4 {
  @include wh(96px);
  margin: 0 auto;
}

.list_option {
  li:not(:first-child) {
    margin-top: 5px;
  }
} 

.type1 {
  .list_option {
    .inp_check,
    .inp_radio {
      + label {
        span {
          font-size: 14px;
        }
      }
    }
  }
}

.type2 {
  .list_option {
    .inp_check,
    .inp_radio {
      + label {
        @include py(22px);

        span {
          font-size: 15px;
        }
      }
    }
  }
}

.type3 {
  .list_option {
    display: flex;
    justify-content: center;
    padding-top: 31px;
    padding-bottom: 21px;

    li {
      width: 72px;
      margin-top: 0;
    }
    
  }
  .wrap_info {
    display: flex;
    justify-content: space-between;
    align-item: center;
    height: 32px;
    margin-top: 24px;
    padding: 0 12px;
  }
  .btn_down,
  .btn_up {
    @include wh(32px);
    background: 0 0 no-repeat;
    background-size: 32px auto;
  }
  .btn_down {
    background-image: url(../images/btn_down.svg);
  }
  .btn_up {
    background-image: url(../images/btn_up.svg);
  }
  .txt_info {
    font-size: 30px;
    font-family: 'Gilroy';
    font-weight: 800;
    line-height: 32px;

    strong {
      margin-left: 4px;
      font-size: 28px;
    }

    .txt_bar {
      font-weight: 300;
    }
  }
  
}

.type4 {
  .list_option {
    display: flex;
    justify-content: space-between;
    margin: 0 -8px;

    li {
      width: 50%;
      padding: 0 4px;
      margin-top: 0;
    }
    
    .inp_check,
    .inp_radio {
      + label {
        display: block;
        padding-top: 24px;
        padding-bottom: 32px;

        span {
          margin-top: 6px;
          font-size: 15px;
          text-align: center;
        }
      }
      &:checked + label {
        background-image: none;
      }
    }
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
    min-height: 72px;
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