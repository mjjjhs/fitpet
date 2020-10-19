import * as React from 'react';
import {DrSectionStyle} from "../../Styles";
import {createRef, LegacyRef, SyntheticEvent, useEffect} from "react";
// import {isMobile, isSafari, getUA} from 'react-device-detect';

function DrSection({
                     setDrSectionHeight,
                     clientWidth
}: {
  setDrSectionHeight?: (height:number) => void,
  clientWidth?: number
}) {
  const drSection: LegacyRef<HTMLDivElement> = createRef();
  return (
    <React.Fragment>
      <section className="feature_dr" ref={drSection}>
        <div className="inner">
          <img src="images/dr.png"
              srcSet="images/dr@2x.png 320w,
                      images/dr@3x.png 768w"
              sizes="(max-width: 319px) 192px,
                      (max-width: 767px) 256px,
                      320px"
              // onLoad={onImgLoad}
          />
        </div>
      </section>
      <style jsx>{DrSectionStyle}</style>
    </React.Fragment>
  );
}


export default DrSection;