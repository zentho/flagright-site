import React from "react";

export default function GeneralFooterMenu() {
  return (
    <div className="flex flex-col gap-3 text-sm font-medium">
      <a href="/privacy">
        <p>Privacy Policy</p>
      </a>
      <a href="/terms">
        <p>Terms</p>
      </a>
      <a href="/jobs">
        <p>Jobs</p>
      </a>
      <a href="/cookie">
        <p>Cookie Policy</p>
      </a>
      <a href="/imprint">
        <p>Imprint</p>
      </a>
    </div>
  );
}
