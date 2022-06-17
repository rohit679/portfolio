import React, { useEffect } from 'react';
import Particles from '../../organisms/molecules/particles';
import Container from '../../organisms/atoms/container';
import Type from "../../organisms/atoms/Type";
import Text from "../../organisms/atoms/Text";
import myPic from '../../../assets/myPic.jpg';
import avatar from '../../../assets/avatar.svg';
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Home = ({ setPath }) => {
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);
  return (
    <div fluid className="home-section flex flex-col" id="home">
      <Container classname="my-40">
        <Particles />
        <div className="flex gap-12">
          <div className="flex flex-1 text-white">
            <div className="flex flex-col gap-3 py-10">
              <Text size="2xl">
              Hi There!{" "}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
              </Text>
            
              <Text size="6xl">I'm</Text>
              <Text size="9xl" classname="font-bold text-[#bcfd49]"> Rohit Prasad</Text>
              <Type />
              
            </div>
          </div>
          <img src={myPic} width="600px" alt="Image" className="rounded-2xl shadow-lg shadow-[#bcfd49]" />
          </div>
      </Container>
      <Container classname="my-20">
        <div className="flex gap-12">
          <img src={avatar} width="300px" alt="Image" className="rounded-2xl" />
          <div className="bg-gray-800 w-full rounded-lg py-12 shadow-md shadow-white">
            <div className="flex flex-1 gap-6 justify-center">
              <Text size="5xl">LET ME</Text>
              <Text size="5xl" classname="text-[#bcfd49]">INTRODUCE</Text>
              <Text size="5xl">MYSELF</Text>
            </div>
            <div className="flex flex-col gap-4 mt-8 mx-16">
              <Text size="sm">A {" "}
                <span className="text-[#bcfd49]">Software Engineer</span> {" "} 
              <span className="font-bold">@Plaxonic Technlogies</span> with over <span className="text-[#bcfd49] font-bold">2 years</span> of experience. Had been part of multiple <span className="text-[#bcfd49]">Product</span> development & <span className="text-[#bcfd49]">Government</span> projects.</Text>
              <Text size="sm">Good proficiency in <span className="text-[#bcfd49] font-bold">MERN</span> tech stack <span className="text-[#bcfd49] font-bold">...</span></Text>
              <Text size="sm">Love to do <span className="font-bold">Competitive Coding</span> ❤️. Primarily, practice at <span className="text-[#bcfd49] font-bold">LeetCode</span> with having <span className="text-[#bcfd49] font-bold">3</span> 🌟 profile</Text>
              <Text size="sm">
                <span className="text-[#bcfd49] font-bold">NodeJs</span> {" "}
                is one of my favorite 😇 technology, specially in case of REST APIS</Text>
            </div>
          </div>
        </div>
      </Container>
      <Container classname="my-10">
        <div className="flex flex-1 justify-center">
          <div className="flex flex-col gap-2 items-center">
            <Text size="5xl" className="font-bold">FIND ME ON</Text>
            <Text size="sm" className="font-bold">Feel free to <span className="text-[#bcfd49] font-bold">connect</span></Text>
            <div className="flex gap-6">
              <div 
                className="flex items-center justify-center h-10 w-10 rounded-[20px] bg-white"
                
              >
                <AiFillGithub color="black" size="25" />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-[20px] bg-white">
                <AiOutlineTwitter color="black" size="25" />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-[20px] bg-white">
                <FaLinkedinIn color="black" size="25" />
              </div>
              <div className="flex items-center justify-center h-10 w-10 rounded-[20px] bg-white">
                <AiFillInstagram color="black" size="25" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Home;
