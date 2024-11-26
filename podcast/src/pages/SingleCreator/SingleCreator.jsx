import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toggleSlider } from "../../app/slices/sliderSlice";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import LatestShows from "../../components/Podcasts/LatestShows/LatestShows";
import TopCreators from "../../components/Podcasts/TopCreators/TopCreators";
import CreatorImage from "../../components/SingleCreator/CreatorImage/CreatorImage";
import CreatorInfo from "../../components/SingleCreator/CreatorInfo/CreatorInfo";
import creators from "../../utils/json/topCreators.json";
import podcasts from "../../utils/json/podcasts.json";
import UserSlider from "../Home/features/UserSlider/UserSlider";
import CreatorData from "./../../components/SingleCreator/CreatorData/CreatorData";
import SliderDiv from "../../components/SliderDiv/SliderDiv";
import { userSliderHandler } from "../../utils/constants";

const SingleCreator = () => {
  const params = useParams();

  const creator = creators.find((creat) => creat.id == params.creatorId);
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
    userSliderHandler(dispatch, toggleSlider, isUserViewOpen);
  }, [isUserViewOpen, dispatch]);

  return (
    <div>
      <Navbar />
      <div className="grid grid-cols-12">
        <SliderDiv />

        <div
          className={`${
            isUserViewOpen ? "md:col-span-10" : "md:col-span-12"
          } col-span-12 text-white bg-black relative h-auto px-4 md:px-10 py-10`}>
          <div className="grid grid-cols-12  md:gap-10 gap-3">
            <CreatorImage creator={creator} />
            <div className="col-span-12 md:col-span-7">
              <CreatorInfo creator={creator} />

              <CreatorData podcasts={podcasts} />
            </div>
          </div>
          <div>
            <LatestShows text={"Recommended Creators"} isTwoRows={true} />
          </div>
          <div>
            <TopCreators text={"Recommended Podcast"} isTwoRows={true} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default SingleCreator;
