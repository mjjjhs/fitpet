import * as React from "react";
import {ContentStyle} from "../Styles";
import Slider from "react-slick";
import {DrSection, CheckList, RadioList, UpDown, Range} from './Content/index';
import {ISlickSettings} from "../Interface/SlickSlider";
import {ENotice, ETitle} from "../Enums/Text";

const settings: ISlickSettings = {
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

const totalQeustionLength: number = 18;

function Content() {

  return (
    <div className="content">
      <DrSection />
      <Slider {...settings}>
        <CheckList
          curQuestionNum={1}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MULTIPLE}
          title={ETitle.Q1}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={2}
          title={ETitle.Q2}
        />
        <CheckList
          curQuestionNum={3}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MAX_TWO}
          title={ETitle.Q3}
        />
        <UpDown
          curQuestionNum={4}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.STANDARD_CUP}
          title={ETitle.Q4}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={5}
          title={ETitle.Q5}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={6}
          title={ETitle.Q6}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={7}
          title={ETitle.Q7}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={8}
          title={ETitle.Q8}
        />
        <CheckList
          curQuestionNum={9}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MAX_TWO}
          title={ETitle.Q9}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={10}
          title={ETitle.Q10}
          notice={ENotice.NOTICE}
        />
        <CheckList
          curQuestionNum={11}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MAX_THREE}
          title={ETitle.Q11}
        />
        <Range
          curQuestionNum={12}
          totalQuestionLength={totalQeustionLength}
          min={2}
          max={15}
          title={ETitle.Q12}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={13}
          title={ETitle.Q13}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={14}
          title={ETitle.Q14}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={15}
          title={ETitle.Q15}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={16}
          title={ETitle.Q16}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={17}
          title={ETitle.Q17}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={18}
          title={ETitle.Q18}
        />
      </Slider>
      <style jsx>{ContentStyle}</style>
    </div>
  );
}

export default Content;