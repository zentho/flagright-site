import React from "react";
import AdvisoryFooterMenu from "../components/AdvisoryFooterMenu";
import FlagrightMark from "../components/FlagrightMark";
import FollowPanel from "../components/FollowPanel";
import GeneralFooterMenu from "../components/GeneralFooterMenu";
import IntegrationsFooterMenu from "../components/IntegrationsFooterMenu";
import PlatformFooterMenu from "../components/PlatformFooterMenu";

export default function Footer() {
  return (
    <footer className="pt-20 pb-20 px-8 bg-[#EBF2FF] lg:px-24 xl:px-44 text-gray-700">
      <div className="flex justify-between mb-10 sm:justify-start sm:gap-8 md:hidden">
        <FlagrightMark />
        <FollowPanel />
      </div>

      <div className="grid grid-cols-1 gap-10 lg:justify-items-center sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 lg:gap-0">
        <div className="hidden md:block">
          <FlagrightMark />
        </div>
        <div className=" lg:col-span-2">
          <PlatformFooterMenu />
        </div>
        <div className="flex flex-col gap-8 ">
          <IntegrationsFooterMenu />
          <AdvisoryFooterMenu />
        </div>
        <div className="lg:col-span-2">
          <GeneralFooterMenu />
        </div>

        <div className="hidden lg:justify-self-center md:block lg:col-span-2">
          <FollowPanel />
        </div>
      </div>
    </footer>
  );
}
