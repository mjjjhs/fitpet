import * as React from "react";
import HeaderStyle from "../Styles/HeaderStyle";

function Header() {
  return (
    <div className="header">
      <h1 className="logo">FitPet</h1>
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