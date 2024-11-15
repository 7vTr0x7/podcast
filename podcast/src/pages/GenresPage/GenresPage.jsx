import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSlider } from "../../app/slices/sliderSlice";
import Navbar from "../../components/Navbar/Navbar";
import OtherFooter from "../../components/OtherFooter/OtherFooter";
import Player from "../../components/Player/Player";
import UserSlider from "../Home/features/UserSlider/UserSlider";

import genres from "../../utils/json/genres.json";
import GenreCard from "../../components/Search/Genres/GenreCard";

const GenresPage = () => {
  const isUserViewOpen = useSelector((state) => state.slider.isSliderOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 640;
      if (isMobile) {
        dispatch(toggleSlider(false));
      } else {
        dispatch(toggleSlider(true));
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      const isMobile = window.innerWidth < 640;
      if (isUserViewOpen && isMobile) {
        dispatch(toggleSlider(false));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isUserViewOpen, dispatch]);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <div
          className={`${
            isUserViewOpen ? "md:col-span-2" : "md:hidden"
          } absolute text-gray-50 bg-black ${
            isUserViewOpen
              ? "z-40 left-0 md:w-full w-6/12 md:mt-0 col-span-12 h-auto transform"
              : "md:relative col-span-0"
          } md:block md:relative md:z-0`}>
          <UserSlider />
        </div>

        <div
          className={`${
            isUserViewOpen ? "md:col-span-10" : "md:col-span-12"
          } col-span-12 text-white bg-black relative h-auto px-4 md:px-10 py-10`}>
          {" "}
          <div className="flex items-center justify-between  md:pr-5 ">
            <p className="text-white text-2xl   mb-4">Genres</p>
          </div>
          <div className="flex md:grid md:grid-cols-3 gap-6  overflow-x-auto md:overflow-visible">
            {genres &&
              genres.map((genre) => (
                <div
                  key={genre._id}
                  className="min-w-[300px] flex-shrink-0 md:min-w-0 pb-3">
                  <GenreCard genre={genre} />
                </div>
              ))}
          </div>
          <OtherFooter />
        </div>
      </div>
    
    </div>
  );
};

export default GenresPage;
