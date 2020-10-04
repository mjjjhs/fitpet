import css from 'styled-jsx/css';
export default css`
  /* mixin */
  @mixin wh($px) {
    width: $px;
    height: $px;
    margin-right: 8px;
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
    }
  }
`;

