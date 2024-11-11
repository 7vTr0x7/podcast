import React from "react";
import { MdHome } from "react-icons/md";
import { IoMdDownload } from "react-icons/io";
import { BsCollectionPlayFill } from "react-icons/bs";
import { FaMicrophone } from "react-icons/fa6";
import { FaFileAudio } from "react-icons/fa";
import { GiBookCover } from "react-icons/gi";
import { FaHistory } from "react-icons/fa";

const UserFeaturesNav = () => {
  return (
    <div className="md:my-8 my-5 flex flex-col justify-between px-3">
      <div className="py-3  flex items-center gap-3 hover:bg-gray-200 px-3 hover:rounded-lg hover:text-black cursor-pointer">
        <MdHome className="text-xl" />
        <p>Home</p>
      </div>
      <div className="py-3  flex items-center gap-3 hover:bg-gray-200 px-3 hover:rounded-lg hover:text-black cursor-pointer">
        <IoMdDownload className="text-xl" />
        <p>Download</p>
      </div>
      <div className="py-3  flex items-center gap-3 hover:bg-gray-200 px-3 hover:rounded-lg hover:text-black cursor-pointer">
        <BsCollectionPlayFill className="text-base" />
        <p>Library</p>
      </div>
      <div className="py-3  flex items-center gap-3 hover:bg-gray-200 px-3 hover:rounded-lg hover:text-black cursor-pointer">
        <FaMicrophone className="text-lg" />
        <p>Podcast</p>
      </div>
      <div className="py-3  flex items-center gap-3 hover:bg-gray-200 px-3 hover:rounded-lg hover:text-black cursor-pointer">
        <FaFileAudio className="text-lg" />
        <p>Audio Book</p>
      </div>
      <div className="py-3  flex items-center gap-3 hover:bg-gray-200 px-3 hover:rounded-lg hover:text-black cursor-pointer">
        <GiBookCover className="text-lg" />
        <p>Stories</p>
      </div>
      <div className="py-3  flex items-center gap-3 hover:bg-gray-200 px-3 hover:rounded-lg hover:text-black cursor-pointer">
        <FaHistory className="text-lg" />
        <p>Listening History</p>
      </div>
    </div>
  );
};

export default UserFeaturesNav;
