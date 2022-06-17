import React, { useEffect } from 'react';
import Text from '../atoms/Text';
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import NavbarTab from './navbarTab';
import logo from '../../../assets/logo3.png';

const NavBar = ({ activePath }) => {
  return (
    <div className="absolute top-0 sticky w-full z-50">
      <div className="bg-gray-800 flex justify-between px-[200px] py-6">
        <img src={logo} width="30" />
      <div className="flex gap-6 items-center">
        <NavbarTab title="Home" icon={AiOutlineHome} link="/" isActive={'/' === activePath} />
        <NavbarTab title="About" icon={AiOutlineUser} link="/about" isActive={'/about' === activePath} />
        <NavbarTab title="Projects" icon={AiOutlineFundProjectionScreen} link="/projects" isActive={'/projects' === activePath} />
        <NavbarTab title="Resume" icon={CgFileDocument} link="/resume" isActive={'/resume' === activePath} />
        <NavbarTab title="Publications" icon={ImBlog} link="/articles" isActive={'/articles' === activePath} />
        <div className="flex gap-2 items-center rounded px-2 py-[10px] bg-white">
          <CgGitFork size="20" color="black" />{" "}
          <AiFillStar size="20" color="black" />
        </div>
      </div>
      </div>
    </div>
  )
}

export default NavBar;
