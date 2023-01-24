import React from "react";
import SanctionCode from "../../components/SanctionCode";
import PurpleArrow from "../../media/svg/PurpleArrow";

export default function Designed() {
  return (
    <section className="py-28 px-24 bg-[#1A1935] text-white">
      <div className="grid items-center grid-cols-5 gap-16">
        <div className="col-span-3 overflow-hidden bg-[#0a0925] rounded-lg">
          <div className="bg-[#2f2755] text-center py-2">
            <h3>Sanction checks</h3>
          </div>
          <div
            id="sanction-code"
            className="px-8 pt-6 overflow-x-hidden overflow-y-scroll max-h-80 font-ayuthaya"
          >
            <SanctionCode />
            <SanctionCode />
            <SanctionCode />
          </div>
          <div className="flex justify-end py-4 bg-[#0a0925]">
            <button className="px-4 py-2 mr-6 bg-[#1169f9] rounded text-lg">Send request</button>
          </div>
        </div>
        <div className="flex flex-col col-span-2 gap-6">
          <div>
            <h2 className="mb-2 text-3xl font-semibold leading-tight">
              Designed for
              <span className="text-[#8B75F2]"> developers</span>
            </h2>
            <p className="font-light leading-7 text-medium">
              Meet the industry's most robust REST API. Powerful, centralized system abstracted into a single,
              easy-to-use API. Integrate end-to-end within 4 days.
            </p>
          </div>
          <a className="block text-lg font-semibold text-[#8B75F2]" href="/docs">
            Read API docs
            <PurpleArrow />
          </a>
          <a className="block text-lg font-semibold text-[#8B75F2]" href="/key">
            Get an API key
            <PurpleArrow />
          </a>
        </div>
      </div>
    </section>
  );
}
