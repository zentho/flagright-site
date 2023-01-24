import React from "react";

export default function GeneralFooterMenu() {
  return (
    <div className="flex flex-col gap-3">
      <a href="/privacy">
        <p className="font-medium">Privacy Policy</p>
      </a>
      <a href="/terms">
        <p className="font-medium">Terms</p>
      </a>
      <a href="/jobs">
        <p className="font-medium">Jobs</p>
      </a>
      <a href="/cookie">
        <p className="font-medium">Cookie Policy</p>
      </a>
      <a href="/imprint">
        <p className="font-medium">Imprint</p>
      </a>
    </div>
  );
}
