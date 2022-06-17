import React, { useEffect } from 'react';
import Text from "../../organisms/atoms/Text";

const Projects = ({ setPath }) => {
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  return (
    <div className="home-section h-screen flex justify-center items-center">
        <div className="h-[20rem] w-[30rem] rounded-xl shadow-2xl shadow-[#bcfd49] flex justify-center items-center bg-gray-800">
          <Text>Projects page is coming soon</Text>
        </div>
    </div>
  )
}

export default Projects;
