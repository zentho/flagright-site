import React from "react";
import Bank from "../media/svg/Bank";
import Hammer from "../media/svg/Hammer";

export default function Protect() {
  return (
    <section className="p-8 pt-24 pb-36 bg-[#1A1935] text-white lg:px-48">
      <h2 className="max-w-md mx-auto mb-10 text-3xl font-semibold leading-tight lg:text-center lg:mb-16 lg:max-w-full">
        <span className="text-[#8B75F2]"> Protect </span>
        your <br className="lg:hidden" /> organization and users
      </h2>
      <div className="grid max-w-md grid-cols-1 gap-10 mx-auto lg:grid-cols-3 lg:max-w-full">
        <div>
          <Hammer />
          <h3 className="mt-5 mb-1 text-2xl font-medium">Sanctions</h3>
          <p className="max-w-sm font-light leading-7 text-gray-300 text-medium">
            Global data about financial penalties imposed on institutions by governments.
          </p>
        </div>
        <div>
          <Bank />
          <h3 className="mt-5 mb-1 text-2xl font-medium">PEP</h3>
          <p className="max-w-sm font-light leading-7 text-gray-300 text-medium">
            Identify politically exposed parties and accurately assess your customers' risk exposure.
          </p>
        </div>
        <div>
          <Hammer />
          <h3 className="mt-5 mb-1 text-2xl font-medium">Adverse Media</h3>
          <p className="max-w-sm font-light leading-7 text-gray-300 text-medium">
            View negative mentions of business and consumer users in the news.
          </p>
        </div>
      </div>
    </section>
  );
}
