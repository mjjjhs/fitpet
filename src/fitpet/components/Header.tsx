import * as React from "react";
import HeaderStyle from "../styles/HeaderStyle";

function Header() {
  return (
    <div className="header">
      <div className="header-children"></div>
      <style jsx>{HeaderStyle}</style>
    </div>
  );
}

export default Header;