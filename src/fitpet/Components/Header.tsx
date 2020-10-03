import * as React from "react";
import HeaderStyle from "../Styles/HeaderStyle";
import {IHeader} from "../Interface/Props";

function Header({isNext, isPrev}: IHeader) {
  return (
    <div className="header">
      <img src="images/logo_fitpet.svg" className="logo" />
      <div className="wrap_btn">
        {isNext && <button className="btn_prev" />}
        {isPrev && <button className="btn_next" />}
      </div>
      <style jsx>{HeaderStyle}</style>
    </div>
  );
}

export default Header;