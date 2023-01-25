import React from "react";

export default function FlagrightMark() {
  return (
    <div>
      <a href="/">
        <img className="max-w-[7rem]" src={require("../media/flagright.png")} alt="flagright logo" />
      </a>
      <p className="mt-4 text-xs">© 2023 Flagright</p>
    </div>
  );
}
