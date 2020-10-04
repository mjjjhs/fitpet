import * as React from "react";
import {ContentStyle} from "../Styles";
import Slider from "react-slick";
import {DrSection, CheckList, RadioList, UpDown, Range} from './Content/index';
import {ISlickSettings} from "../Interface/SlickSlider";
import {ENotice, ETitle} from "../Enums/Text";
import {q1, q2, q3, q5, q6, q7, q8, q9, q10, q11, q13, q14, q15, q16, q17, q18} from '../Mock/GetData';

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
          data={q1()}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={2}
          title={ETitle.Q2}
          data={q2()}
        />
        <CheckList
          curQuestionNum={3}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MAX_TWO}
          title={ETitle.Q3}
          data={q3()}
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
          data={q5()}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={6}
          title={ETitle.Q6}
          data={q6()}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={7}
          title={ETitle.Q7}
          data={q7()}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={8}
          title={ETitle.Q8}
          data={q8()}
        />
        <CheckList
          curQuestionNum={9}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MAX_TWO}
          title={ETitle.Q9}
          data={q9()}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={10}
          title={ETitle.Q10}
          notice={ENotice.NOTICE}
          data={q10()}
        />
        <CheckList
          curQuestionNum={11}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MAX_THREE}
          title={ETitle.Q11}
          data={q11()}
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
          data={q13()}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={14}
          title={ETitle.Q14}
          data={q14()}

        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={15}
          title={ETitle.Q15}
          data={q15()}

        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={16}
          title={ETitle.Q16}
          data={q16()}

        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={17}
          title={ETitle.Q17}
          data={q17()}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={18}
          title={ETitle.Q18}
          data={q18()}
        />
      </Slider>
      <style jsx>{ContentStyle}</style>
    </div>
  );
}

export default Content;