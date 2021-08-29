import React from "react";
import ImageCard from "../cards/card-w-img";
import TextCard from "../cards/card-w-text";
import TestemonialCard from "../cards/card-w-testemonial";
import "./works.css";

const Works = ({ worksInfo, testemonial }) => {
  return (
    <section className="works">
      <div className="works__cards">
        <div className="works__cards--4">
          {worksInfo.slice(0, 4).map((work, index) => (
            <ImageCard props={work} key={index} />
          ))}
        </div>

        <div className="works__cards--row">
          <div className="works__cards--column">
            {worksInfo.slice(4, 6).map((work, index) => (
              <TextCard props={work} key={index} />
            ))}
          </div>
          {worksInfo.slice(6, 9).map((work, index) => (
            <ImageCard props={work} key={index} />
          ))}
        </div>

        <div className="works__cards--row-reverse">
          <div className="works__cards--column">
            {worksInfo.slice(9, 11).map((work, index) => (
              <TextCard props={work} key={index} />
            ))}
          </div>
          <div className="works__cards--desktop">
            {worksInfo.slice(6, 7).map((work, index) => (
              <ImageCard props={work} key={index} />
            ))}
          </div>
        </div>
        <div className="works__cards--6">
          {worksInfo.slice(11, 15).map((work, index) => (
            <ImageCard props={work} key={index} />
          ))}
        </div>
        <TestemonialCard props={testemonial} />
        <div className="works__cards--6">
        {worksInfo.slice(15, 17).map((work, index) => (
          <ImageCard props={work} key={index} />
        ))}</div>
      </div>
    </section>
  );
};

export default Works;
