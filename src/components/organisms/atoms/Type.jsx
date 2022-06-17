import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
  return (
    <Typewriter
      options={{
        skipAddStyles: false,
        strings: [
          "Software Engineer @Plaxonic Technologies",
          "Technical Content Writer @GeeksForGeeks",
          "Open Source Contributor",
          "3 Star LeetCode"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 300,
      }}
    />
  );
}

export default Type;
