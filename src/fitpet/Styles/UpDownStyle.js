import css from 'styled-jsx/css';
export default css`
  /* mixin */
  @mixin wh($px) {
    width: $px;
    height: $px;
    margin-right: 8px;
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
  
  
`;