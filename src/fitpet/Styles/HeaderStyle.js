import css from 'styled-jsx/css';
export default css`
  .header {
    display: flex;
    justify-content: space-between;
    align-item: center;
    height: 56px;
    padding: 16px 20px;
    line-height: 56px;
    
    .logo {
      width: 88px;
      height: 24px;
      object-fit: contain;
    }

    .wrap_btn {
      height: 20px;
      display: flex;
      justify-content: flex-end;
    }

    .btn_prev,
    .btn_next {
      width: 55px;
      height: 100%;
      object-fit: contain;
      background: 0 0 no-repeat;
      background-size: 55px auto;
    }

    .btn_prev {
      background-image: url(images/btn_prev@3x.png);
    }
    .btn_next {
      margin-left: 16px;
      background-image: url(images/btn_next@3x.png);
    }
  }
  
`;