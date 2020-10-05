import css from 'styled-jsx/css';
export default css.global`
  /* reset */
  * {box-sizing: border-box}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,textarea,p,blockquote,th,td,input,select,textarea,button {margin:0;padding:0}
  fieldset,img {border:0 none}
  dl,ul,ol,menu,li {list-style:none}
  blockquote, q {quotes:none}
  blockquote:before, blockquote:after,q:before, q:after {content:'';content:none}
  input,select,textarea,button {font-size:100%;vertical-align:middle}
  button {border:0 none;outline:0;background-color:transparent;cursor:pointer}
  table {border-collapse:collapse;border-spacing:0}
  body {-webkit-text-size-adjust:none}
  input[type='text'],input[type='password'],input[type='submit'],input[type='search'] {-webkit-appearance:none; border-radius:0}
  input:checked[type='checkbox'] {background-color:#666; -webkit-appearance:checkbox}
  button,input[type='button'],input[type='submit'],input[type='reset'],input[type='file'] {-webkit-appearance:button; border-radius:0}
  input[type='search']::-webkit-search-cancel-button {-webkit-appearance:none}
  body {background:#fff}
  body,th,td,input,select,textarea,button {font-size:14px;line-height:1.43;font-family:'Noto Sans KR', 'Apple SD Gothic Neo', 'helvetica neue', sans-serif;color:#333}
  a {color:#333;text-decoration:none}
  a:active, a:hover {text-decoration:none}
  address,caption,cite,code,dfn,em,var {font-style:normal;font-weight:normal}

  .screen_out {overflow:hidden;position:absolute;width:0;height:0;line-height:0;text-indent:-9999px}
  .tbl {border-collapse:collapse;border-spacing:0}
  .clear_g {display:block;overflow:visible;width:auto;clear:both;*zoom:1}
  .clear_g:after {display:block;visibility:hidden;height:0;font-size:0;clear:both;content:''}
`;