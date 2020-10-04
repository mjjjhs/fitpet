import * as React from "react";
import {ContentStyle} from "../Styles";
import Slider from "react-slick";
import {DrSection, CheckList, RadioList, UpDown, Range} from './Content/index';
import {ISlickSettings} from "../Interface/SlickSlider";
import {ENotice, ETitle} from "../Enums/Text";
import {q1, q2, q3, q5, q6, q7, q8, q9, q10, q11, q13, q14, q15, q16, q17, q18} from '../Mock/GetData';
import {useEffect, useMemo, useState} from "react";
import {isMobile} from 'react-device-detect';

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

function Content({isPortrait, isLandscape}: {isLandscape: boolean, isPortrait: boolean}) {
  const [clientSize, setClientSize] = useState<{height: number, width: number}>({
    height: window.outerHeight,
    width: window.outerWidth
  });

  const [drSectionHeight, setDrSectionHeight] = useState<number>();

  const onResize = (e: UIEvent): void => {
    setClientSize({
      height: window.outerHeight,
      width: window.outerWidth
    });
  };

  useEffect(() => {
    if(isMobile) {
      return;
    }
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    if(!isMobile) {
      return;
    }
    setClientSize({
      ...clientSize,
      width: window.outerWidth
    });
  }, [isPortrait]);

  const innerScrollHeight = useMemo(() => {
    return clientSize?.height - (drSectionHeight || 0) - 56 - 60 - 88 - 60 - 24;
  }, [clientSize.height, drSectionHeight]);


  return (
    <div className="content">
      <DrSection
        setDrSectionHeight={setDrSectionHeight}
        clientWidth={clientSize?.width}
      />
      <Slider {...settings}>
        <CheckList
          curQuestionNum={1}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MULTIPLE}
          title={ETitle.Q1}
          data={q1()}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={2}
          title={ETitle.Q2}
          data={q2()}
          innerScrollHeight={innerScrollHeight}
        />
        <CheckList
          curQuestionNum={3}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MAX_TWO}
          title={ETitle.Q3}
          data={q3()}
          innerScrollHeight={innerScrollHeight}
        />
        <UpDown
          curQuestionNum={4}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.STANDARD_CUP}
          title={ETitle.Q4}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={5}
          title={ETitle.Q5}
          data={q5()}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={6}
          title={ETitle.Q6}
          data={q6()}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='slimList'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={7}
          title={ETitle.Q7}
          data={q7()}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={8}
          title={ETitle.Q8}
          data={q8()}
          innerScrollHeight={innerScrollHeight}
        />
        <CheckList
          curQuestionNum={9}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MAX_TWO}
          title={ETitle.Q9}
          data={q9()}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={10}
          title={ETitle.Q10}
          notice={ENotice.NOTICE}
          data={q10()}
          innerScrollHeight={innerScrollHeight}
        />
        <CheckList
          curQuestionNum={11}
          totalQuestionLength={totalQeustionLength}
          notice={ENotice.MAX_THREE}
          title={ETitle.Q11}
          data={q11()}
          innerScrollHeight={innerScrollHeight}
        />
        <Range
          curQuestionNum={12}
          totalQuestionLength={totalQeustionLength}
          min={2}
          max={15}
          title={ETitle.Q12}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='slimList'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={13}
          title={ETitle.Q13}
          data={q13()}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={14}
          title={ETitle.Q14}
          data={q14()}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='list'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={15}
          title={ETitle.Q15}
          data={q15()}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='slimList'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={16}
          title={ETitle.Q16}
          data={q16()}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='slimList'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={17}
          title={ETitle.Q17}
          data={q17()}
          innerScrollHeight={innerScrollHeight}
        />
        <RadioList
          type='img'
          totalQuestionLength={totalQeustionLength}
          curQuestionNum={18}
          title={ETitle.Q18}
          data={q18()}
          innerScrollHeight={innerScrollHeight}
        />
      </Slider>
      <style jsx>{ContentStyle}</style>
    </div>
  );
}

export default Content;