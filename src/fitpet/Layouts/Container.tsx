import * as React from "react";
import Header from '../Components/Header';
import Content from '../Components/Content';
import ContainerStyle from "../Styles/ContainerStyle";

function Container() {
  return (
    <div className="container">
      <Header isNext={true} isPrev={true}/>
      <Content />
      <style jsx>{ContainerStyle}</style>
    </div>
  );
}

export default Container;