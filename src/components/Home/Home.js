import React from "react";
import {
  ViewHeader,
  HomeRoot,
  H1,
  // BackgroundVid,
} from "../../GlobalComponents";
// import backgroundVid from "../../assets/projector_running_pan.mp4";

const Home = (props) => {
  return (
    <HomeRoot>
      {/* <BackgroundVid autoPlay loop muted> */}
        {/* <source src={backgroundVid} type="video/mp4" /> */}
      {/* </BackgroundVid> */}
      <ViewHeader>Welcome to: </ViewHeader>
      <H1>The Shoppies</H1>
      <ViewHeader>Movie awards for entrepreneurs</ViewHeader>
    </HomeRoot>
  );
};

export default Home;
