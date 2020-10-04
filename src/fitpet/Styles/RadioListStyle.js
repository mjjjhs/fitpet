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
  
  .type2 {
    .list_option {
      overflow-x: hidden;
      overflow-y: auto;
      height: calc(100vh - 472px);
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
      
      .inp_radio {
        & + label {
          display: block;
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
`;

