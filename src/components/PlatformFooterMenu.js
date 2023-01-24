import React from "react";

export default function PlatformFooterMenu() {
  return (
    <div>
      <h3 className="mb-3 text-sm font-medium">Platform</h3>
      <div className="flex flex-col gap-3 text-xs">
        <a href="/time">
          <p className="">Real-time transaction monitoring</p>
        </a>
        <a href="/risk">
          <p className="">Customer risk assessment</p>
        </a>
        <a href="/sanctions">
          <p className="">Sanctions, PEP, AM screening</p>
        </a>
        <a href="/verification">
          <p className="">ID verification</p>
        </a>
      </div>
    </div>
  );
}
