import React from "react";
import Ball from "../media/svg/Ball";
import Bar from "../media/svg/Bar";
import Cloud from "../media/svg/Cloud";
import Hand from "../media/svg/Hand";
import Lightning from "../media/svg/Lightning";
import Rocket from "../media/svg/Rocket";

export default function What() {
  return (
    <section className="p-8 pt-20 pb-14 bg-[#1A1935] text-white ">
      <h2 className="mb-6 leading-tight text-3xl font-semibold">
        What makes Flagright
        <span className="text-[#8B75F2]"> different? </span>
      </h2>
      <p className="mb-12 leading-7 font-light">
        Flagright's developer friendly API takes developer teams 4 days to integrate. Flagright API is the
        ultimate AML compliance and fraud prevention layer that enables you to deliver services to your
        customers at scale using your preferred frameworks.
      </p>
      <div className="grid grid-cols-1 gap-10 mb-16">
        <div>
          <Rocket />
          <h3 className="mt-5 mb-1 text-2xl font-medium">Go live in 4 days</h3>
          <p className="leading-7 font-light">
            Quickest integration in the world. 85% faster than industry benchmark. Our competitors take 2-4
            months.
          </p>
        </div>
        <div>
          <Cloud />
          <h3 className="mt-5 mb-1 text-2xl font-medium">One powerful API</h3>
          <p className="leading-7 font-light">
            A unified, standardized API for all suspicious activity detection use cases.
          </p>
        </div>
        <div>
          <Lightning />
          <h3 className="mt-5 mb-1 text-2xl font-medium">Always real-time</h3>
          <p className="leading-7 font-light">
            Flagright API is always fast at no additional cost even for complex use cases.
          </p>
        </div>
        <div>
          <Hand />
          <h3 className="mt-5 mb-1 text-2xl font-medium">Usage-based pricing</h3>
          <p className="leading-7 text-lg font-light">
            Flexible payment plans that help you realize ROI faster.
          </p>
        </div>
      </div>
      <div id="carousel" className="mb-12">
        <div className="flex flex-col p-12 bg-[#0E0C2C] rounded-xl mb-10">
          <h3 className="mb-6 text-xl text-gray-500 font-semibold">Average response time</h3>
          <p className="text-4xl text-[#e0a143] font-semibold">700ms</p>
        </div>
        <div className="flex flex-col p-12 bg-[#0E0C2C] rounded-xl mb-10">
          <h3 className="mb-6 text-xl text-gray-500 font-semibold">Minimum response time</h3>
          <p className="text-4xl text-[#e0a143] font-semibold">200ms</p>
        </div>
        <div className="flex flex-col p-12 bg-[#0E0C2C] rounded-xl mb-10">
          <h3 className="mb-6 text-xl text-gray-500 font-semibold">Our speed relative to industry</h3>
          <p className="text-4xl text-[#e0a143] font-semibold">185%</p>
        </div>

        <div className="flex justify-center gap-3">
          <span className="cursor-pointer">
            <Bar />
          </span>
          <span className="cursor-pointer">
            <Ball />
          </span>
          <span className="cursor-pointer">
            <Ball />
          </span>
        </div>
      </div>
      <div className="text-center">
        <a type="button" href="/demo" className="py-4 w-full text-xl bg-blue-600 rounded-md">
          Request demo
        </a>
      </div>
    </section>
  );
}
