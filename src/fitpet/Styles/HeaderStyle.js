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
    }
    .btn_prev, .btn_next {
      width: 55px;
      height: 100%;
      object-fit: contain;
      background: url(images/btn_prev.svg);
    }
    .btn_next {
      margin-left: 16px;
      background: url(images/btn_next.svg);
    }
  }
  
  
`;