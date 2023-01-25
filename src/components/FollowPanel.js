import React from "react";

export default function FollowPanel() {
  return (
    <div className="max-w-[6rem]">
      <h3 className="font-medium">Follow Us</h3>
      <div className="flex gap-3 mt-3">
        <a href="https://www.linkedin.com/company/flagright/">
          <img src={require("../media/linkedin.png")} alt="linkedin logo" />
        </a>
        <a href="https://twitter.com/FlagrightHQ">
          <img src={require("../media/twitter.png")} alt="twitter logo" />
        </a>
        <a href="https://medium.com/@Flagright">
          <img src={require("../media/medium.png")} alt="medium logo" />
        </a>
      </div>
    </div>
  );
}
