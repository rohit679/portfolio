// import { NavLink, Link } from "react-router-dom";

const socialLink = ({ icon, color="black", size="25", path="/" }) => {
  return (
    <a href={path} target="_blank">
      <div className="blog-link flex items-center justify-center h-10 w-10 rounded-[20px] bg-white cursor-pointer hover:shadow-lg hover:shadow-baseCol">
        {icon({ size: size, color: color })}
      </div>
    </a>
  )
}

export default socialLink;
