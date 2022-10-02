import React from "react";
import profilePicture from "../../../static/assets/images/bio/James_Dean.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "top"
        }}
      />
      <div className="right-column">
        blah blah blabbity blah. blah blah blabbity blah. blah blah blabbity
        blah. blah blah blabbity blah. blah blah blabbity blah. blah blah
        blabbity blah. blah blah blabbity blah. blah blah blabbity blah. blah
        blah blabbity blah. blah blah blabbity blah. blah blah blabbity blah.
        blah blah blabbity blah. blah blah blabbity blah. blah blah blabbity
        blah. blah blah blabbity blah. blah blah blabbity blah. blah blah
        blabbity blah. blah blah blabbity blah. blah blah blabbity blah. blah
        blah blabbity blah. blah blah blabbity blah. blah blah blabbity blah.
        blah blah blabbity blah. blah blah blabbity blah. blah blah blabbity
        blah.{" "}
      </div>
    </div>
  );
}
