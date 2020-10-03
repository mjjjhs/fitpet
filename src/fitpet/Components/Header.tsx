import * as React from "react";
import HeaderStyle from "../Styles/HeaderStyle";

function Header() {
  return (
    <div className="header">
      <img src="images/logo_fitpet.svg" className="logo" />
      <div className="wrap_btn">
        <button type="button" className="btn_next">
          Next
          <span className="screen_out"></span>
        </button>
      </div>
      <style jsx>{HeaderStyle}</style>
    </div>
  );
}

export default Header;