import React from "react";
import Hammer from "../media/svg/Hammer";

export default function Protect() {
  return (
    <section className="p-8 pt-24 pb-36 bg-[#1A1935] text-white ">
      <h2 className="mb-10 text-3xl font-semibold">
        <span className="text-[#8B75F2]"> Protect </span>
        your organization and users
      </h2>
      <div className="grid grid-cols-1 gap-10">
        <div>
          <Hammer />
          <h3 className="mt-5 mb-1 text-xl font-medium">Sanctions</h3>
          <p className="leading-7 text-medium font-light">
            Global data about financial penalties imposed on institutions by governments.
          </p>
        </div>
        <div>
          <Hammer />
          <h3 className="mt-5 mb-1 text-xl font-medium">PEP</h3>
          <p className="leading-7 text-medium font-light">
            Identify politically exposed parties and accurately assess your customers' risk exposure.
          </p>
        </div>
        <div>
          <Hammer />
          <h3 className="mt-5 mb-1 text-xl font-medium">Adverse Media</h3>
          <p className="leading-7 text-medium font-light">
            View negative mentions of business and consumer users in the news.
          </p>
        </div>
      </div>
    </section>
  );
}
