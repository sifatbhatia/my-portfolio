import React from "react";
import Lottie from "react-lottie";
import animationData from "./94146-coming-soon.json";
export default function Blog() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    background:"#000000" ,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
      <>
          <Lottie options={defaultOptions}  />
</>
  )
}

