import * as React from 'react';
import {DrSectionStyle} from "../../Styles";

function DrSection() {
  return (
    <React.Fragment>
      <section className="feature_dr">
        <img src="images/dr_01.png"
             srcSet="images/dr_01@2x.png 320w,
                    images/dr_01@3x.png 768w"
             sizes="(max-width: 319px) 192px,
                    (max-width: 767px) 256px,
                    512px"
        />
      </section>
      <style jsx>{DrSectionStyle}</style>
    </React.Fragment>
  );
}


export default DrSection;