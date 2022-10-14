import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full px-4 sm:grid grid-cols-2 gap-8 ">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi I'm Siddharth, nice to meet you.Please take a look around.</p>
          </div>
          <div className="pt-6">
            <p>I am aspiring to become a Full Stack Web Developer,Recently im 
                learning how to create highly responsive website with some
                built-in animations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
