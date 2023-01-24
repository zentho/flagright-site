import React from "react";
import AdvisoryFooterMenu from "../components/AdvisoryFooterMenu";
import FlagrightMark from "../components/FlagrightMark";
import FollowPanel from "../components/FollowPanel";
import GeneralFooterMenu from "../components/GeneralFooterMenu";
import IntegrationsFooterMenu from "../components/IntegrationsFooterMenu";
import PlatformFooterMenu from "../components/PlatformFooterMenu";

export default function Footer() {
  return (
    <footer className="pt-20 pb-20 px-8 bg-[#EBF2FF] lg:px-24 ">
      <div className="flex justify-between mb-10 sm:justify-start sm:gap-8 md:hidden">
        <FlagrightMark />
        <FollowPanel />
      </div>

      <div className="grid grid-cols-1 gap-10 sm:grid-cols-4 md:grid-cols-6 lg:gap-16">
        <div className="hidden md:block">
          <FlagrightMark />
        </div>
        <PlatformFooterMenu />
        <div className="flex flex-col gap-8 ">
          <IntegrationsFooterMenu />
          <AdvisoryFooterMenu />
        </div>

        <GeneralFooterMenu />

        <div className="hidden ml-40 md:block min-w-max">
          <FollowPanel />
        </div>
      </div>
    </footer>
  );
}
