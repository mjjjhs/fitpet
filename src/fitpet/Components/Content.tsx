import * as React from "react";
import {ContentStyle} from "../Styles";
import Slider from "react-slick";
import {DrSection, CheckList, RadioList, UpDown, Range} from './Content/index';

const settings: {
  className: string,
  arrows: boolean,
  dots: boolean,
  infinite: boolean,
  speed: number,
  slidesToShow: number,
  centerMode: boolean,
  centerPadding: string,
  adaptiveHeight: boolean
} = {
  className: "slider_box",
  arrows: false,
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  centerMode: true,
  centerPadding: "20px",
  adaptiveHeight: true,
};

function Content() {

  return (
    <div className="content">
      <DrSection />
      <Slider {...settings}>
        <CheckList />
        <RadioList type={'img'} />
        <UpDown />
        <RadioList type={'list'} />
        <Range />
      </Slider>
      <style jsx>{ContentStyle}</style>
    </div>
  );
}

export default Content;