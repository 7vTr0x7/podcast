import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSlider } from "../../app/slices/sliderSlice";
import OtherFooter from "../../components/OtherFooter/OtherFooter";
import Player from "../../components/Player/Player";
import SearchNav from "../../components/Search/SearchNav/SearchNav";
import UserSlider from "../Home/features/UserSlider/UserSlider";
import Genres from "../../components/Search/Genres/Genres";
import TopCreators from "./../../components/Podcasts/TopCreators/TopCreators";
import Suggestions from "../../components/Search/Suggestions/Suggestions";

const Search = () => {
  const isUserViewOpen = useSelector((state) => state.slider.isSliderOpen);
  const searchedText = useSelector((state) => state.search.searchedText);

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
    <>
      <SearchNav />
      <div className="grid grid-cols-12">
        <div
          className={`${
            isUserViewOpen ? "md:col-span-2" : "md:hidden"
          } absolute text-gray-50 bg-black ${
            isUserViewOpen
              ? "z-40  left-0 md:w-full w-6/12 md:mt-0 col-span-12 h-auto transform  "
              : "  md:relative col-span-0 "
          } md:block md:relative md:z-0`}>
          <UserSlider />
        </div>

        <div
          className={`${
            isUserViewOpen ? "md:col-span-10" : "md:col-span-12"
          } col-span-12 text-white bg-black relative  h-auto px-4 md:px-7 py-3`}>
          <div className="mb-10">{}</div>
          {searchedText && searchedText.length > 0 ? (
            <Suggestions />
          ) : (
            <Genres />
          )}
          <div className="md:mt-10 mt-4 md:px-5 md:mb-44 mb-10">
            <TopCreators
              isTwoRows={true}
              text={"Recommended Podcasts"}
              noSeeAll={true}
            />
          </div>
          <OtherFooter />
        </div>
      </div>
    </>
  );
};

export default Search;
