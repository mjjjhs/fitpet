import css from 'styled-jsx/css';
export default css`
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
  
  .type1 {
    .list_option {
      .inp_check {
        & + label {
          align-item: center;
          padding-right: 40px;
          
          img {
            @include wh(20px);
          }
          
          span {
            font-size: 14px;
          }
        }
      }
      .inp_radio {
        & + label {
          align-item: center;
          padding-right: 40px;
          
          img {
            @include wh(20px);
          }
          
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
  
  .type2 {
    .list_option {
      .inp_radio {
        & + label {
          @include py(22px);
          align-item: center;
          padding-right: 40px;
            
          img {
            @include wh(20px);
          }
          
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
        
        img {
          width: 72px;
          height: 88px;
        }
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
      background-image: url(images/btn_down@3x.png);
    }
    .btn_up {
      background-image: url(images/btn_up@3x.png);
    }
    .txt_info {
      font-size: 30px;
      font-family: 'gilroyextrabold', 'Apple SD Gothic Neo', 'helvetica neue', san-serif;
      font-weight: 800;
      line-height: 32px;
  
      strong {
        margin-left: 4px;
        font-size: 28px;
      }
  
      .txt_bar {
        font-family: 'gilroylight', 'Apple SD Gothic Neo', 'helvetica neue', san-serif;
        font-weight: 300;
      }
    }
  }
  
  .type4 {
    .list_option {
      display: flex;
      justify-content: space-between;
      margin: 0 -4px;
  
      li {
        width: 50%;
        padding: 0 4px;
        margin-top: 0;
      }
      
      .inp_radio {
        & + label {
          display: block;
          min-height: 198px;
          padding-top: 24px;
          padding-bottom: 32px;
          
          img {
            @include wh(96px);
            margin: 0 auto;
          }
          
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
  
  .type5 {
    .range {
      min-height: 1px;
      margin-top: 78px;
      padding: 0 13px;
    }
  }

  .price-period {
    margin-top: 26px;
    font-size: 24px;
    font-family: 'gilroyextrabold', 'Apple SD Gothic Neo', 'helvetica neue', san-serif;
    font-weight: 800;
    line-height: 32px;
    text-align: center;
    color: #333;
    
    .txt_bar {
      font-family: 'gilroylight';
      font-weight: 300;
    }
  }
  
  /* NewList1, Q1 */
  .type6 {
    .list_option {
      .inp_check {
        & + label {
          img {
            @include wh(20px);
          }
          .sub_text {
            font-size: 12px;
            margin-left: 4px;
          }
        }
      }
    }
  }

 /* NewList2, Q3 */
  .type7 {
    .list_option {
      li {
        width: 33.3333%;

        &:nth-of-type(3) {
          margin-top: 0;
        }
      }

      .inp_check {
        & + label {
          span {
            margin: 0 auto;
            text-align: center;
          }
        }
      }
    }
  }


  /* NewList3, Q11 */
  .type8 {
    .list_option {
      .inp_check {
        & + label {
          span {
            margin: 0 auto;
            text-align: center;
          }
        }
      }
      .lst_txt {
        width: 100%;
        height: 48px;
        padding: 12px 16px;
        border-radius: 10px;
        background-color: #f7f7fb;
      }
      .inp_txt {
        display: block;
        width: 100%;
        height: 24px;
        line-height: 24px;
        border: 0 none;
        outline: none;
        background-color: transparent;
        color: #333;
        &::placeholder {
          color: #c1c1c1;
        }
      }
    }
  }


  /* NewList4, Q16-17 */
  .type9 {
    .list_option {
      .inp_check {
        & + label {
          display: block;
          text-align: center;

          img {
            @include wh(40px);
            margin: 0 auto;
          }

          span {
            margin: 4px auto 0;
            height: 24px;
            line-height: 24px;
          }
        }
      }
    }
  }


`;
