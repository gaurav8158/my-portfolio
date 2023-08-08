import React from "react";
import Title from "../Layout/Title";
import features from "../../assets/images/feature.svg";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full h-[800px] py-20 border-b-[1px] border-b-black mb-14"
    >
      <Title title="FEATURE" description="What I do" />
      <div className="flex flex-wrap">
        <div className="w-1/2">
          <img alt='feature' src={features} />
        </div>
        <div className="w-1/2 flex items-center justify-center cursor-pointer">
          <ul className="font-bodyFont color-bodyColor text-xl max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
            <li>
              Develop highly interactive Front end / User Interfaces for your
              web applications
            </li>
            <li> Building responsive website front end using ReactJS</li>
            <li>
              Integration of third party services such as Firebase and payment
              gateway
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Features;
