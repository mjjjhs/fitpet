import * as React from "react";
import {ContentStyle} from "../Styles";
import Slider from "react-slick";
import {DrSection} from './Content/index';
import {ISlickSettings} from "../Interface/SlickSlider";
import {ENotice, ETitle} from "../Enums/Text";
import {
  q1, q11, q12, q13, q14, q15, q2, q4, q5,
  q6, q7, q8
} from '../Mock/GetData';
import ContentByType from "./Content/ContentByType";

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

const totalQeustionLength: number = 15;
const targetName: string = '복돌';

function Content() {

  return (
    <div className="content">
      <DrSection />
      <Slider {...settings}>
        <ContentByType
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={1}
          title={[ETitle.Q1, ETitle.Q1_2]}
          data={q1()}
        />
        <ContentByType
          type='slimList'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={2}
          title={[ETitle.Q2, ETitle.Q2_2]}
          data={q2()}
        />
        <ContentByType
          targetName={targetName}
          curQuestionNum={3}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.STANDARD_CUP}
          title={[ETitle.Q3, ETitle.Q3_2]}
          typeName="type3"
        />
        <ContentByType
          curQuestionNum={4}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MULTIPLE}
          title={[ETitle.Q4, ETitle.Q4_2]}
          data={q4()}
          typeName="type_new type6"
        />
        <ContentByType
          targetName={targetName}
          curQuestionNum={5}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MULTIPLE}
          title={[ETitle.Q5, ETitle.Q5_2]}
          data={q5()}
          typeName="type_new type6"
        />
        <ContentByType
          targetName={targetName}
          curQuestionNum={6}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MAX_FIVE}
          title={[ETitle.Q6, ETitle.Q6_2]}
          data={q6()}
          typeName="type_new type7"
        />
        <ContentByType
          targetName={targetName}
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={7}
          notice={ENotice.GRAIN}
          title={[ETitle.Q7, ETitle.Q7_2]}
          data={q7()}
        />
        <ContentByType
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={8}
          title={[ETitle.Q8, ETitle.Q8_2]}
          data={q8()}
        />
        <ContentByType
          targetName={targetName}
          curQuestionNum={9}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MAX_FIVE}
          title={[ETitle.Q9, ETitle.Q9_2]}
          data={q6()}
          typeName="type_new type7"
        />
        <ContentByType
          curQuestionNum={10}
          totalQuestionLength={totalQeustionLength}
          min={3}
          max={15}
          title={[ETitle.Q10, ETitle.Q10_2]}
          typeName="type5"
        />
        <ContentByType
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={11}
          notice={ENotice.MAX_THREE}
          title={[ETitle.Q11, ETitle.Q11_2]}
          data={q11()}
          typeName="type1"
        />
        <ContentByType
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={12}
          title={[ETitle.Q12, ETitle.Q12_2]}
          data={q12()}
        />
        <ContentByType
          targetName={targetName}
          curQuestionNum={13}
          totalQuestionLength={totalQeustionLength}
          title={[ETitle.Q13, ETitle.Q13_2]}
          data={q13()}
          typeName="type_new type6"
        />
        <ContentByType
          targetName={targetName}
          curQuestionNum={14}
          notice={ENotice.MULTIPLE}
          totalQuestionLength={totalQeustionLength}
          title={[ETitle.Q14, ETitle.Q14_2]}
          data={q14()}
          typeName="type_new type9"
        />
        <ContentByType
          curQuestionNum={15}
          notice={ENotice.MAX_THREE}
          totalQuestionLength={totalQeustionLength}
          title={[ETitle.Q15, ETitle.Q15_2]}
          data={q15()}
          typeName="type_new type8"
        />
      </Slider>
      <style jsx>{ContentStyle}</style>
    </div>
  );
}

export default Content;