import * as React from 'react';
import {DrSectionStyle} from "../../Styles";
import {createRef, LegacyRef, SyntheticEvent, useEffect} from "react";
import {isMobile, isSafari, getUA} from 'react-device-detect';

function DrSection({
                     setDrSectionHeight,
                     clientWidth
}: {
  setDrSectionHeight: (height:number) => void,
  clientWidth: number
}) {
  const drSection: LegacyRef<HTMLDivElement> = createRef();

  useEffect(() => {
    if(!drSection?.current?.offsetHeight) {
      return;
    }
    setDrSectionHeight(drSection.current.offsetHeight);
  }, [clientWidth]);

  const onImgLoad = (e: SyntheticEvent): void => {
    if(isMobile) {
      if(isSafari) {
        alert(1);
        setDrSectionHeight(e.currentTarget.clientHeight + 40);
      } else if(getUA.includes('KAKAOTALK')) {
        alert(5);
        setDrSectionHeight(e.currentTarget.clientHeight - 110);
      } else {
        alert(2);
        setDrSectionHeight(e.currentTarget.clientHeight + 150 );
      }
    } else {
      if(isSafari) {
        alert(3);
        setDrSectionHeight(e.currentTarget.clientHeight + 40);
      } else {
        alert(4);
        setDrSectionHeight(e.currentTarget.clientHeight + 110);
      }
    }
  };

  return (
    <React.Fragment>
      <section className="feature_dr" ref={drSection}>
        <img src="images/dr_01.png"
             srcSet="images/dr_01@2x.png 320w,
                    images/dr_01@3x.png 768w"
             sizes="(max-width: 319px) 192px,
                    (max-width: 767px) 256px,
                    320px"
             onLoad={onImgLoad}
        />
      </section>
      <style jsx>{DrSectionStyle}</style>
    </React.Fragment>
  );
}


export default DrSection;