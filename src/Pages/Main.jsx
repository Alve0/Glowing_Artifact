import React from "react";
import Banner from "../Components/Main/Banner";
import AboutUs from "../Components/Main/AboutUs";
import ConnectUs from "../Components/Main/ConnectUs";
import TopArtifact from "./TopArtifact";

function Main() {
  return (
    <div>
      <Banner />
      <TopArtifact />
      <ConnectUs />
      <AboutUs />
    </div>
  );
}

export default Main;
