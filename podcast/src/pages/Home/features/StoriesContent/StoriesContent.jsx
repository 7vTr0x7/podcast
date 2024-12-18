import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSlider } from "../../../../app/slices/sliderSlice";
import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import SliderDiv from "../../../../components/SliderDiv/SliderDiv";
import {
  resizeHandler,
  scrollToTop,
  userSliderHandler,
} from "../../../../utils/constants";
import TopCreators from "../../../../components/Podcasts/TopCreators/TopCreators";
import LatestShows from "../../../../components/Podcasts/LatestShows/LatestShows";
import PodcastList from "../../../../components/Podcasts/PodcastList/PodcastList";

const StoriesContent = () => {
  useEffect(() => {
    scrollToTop();
  }, []);
  const isUserViewOpen = useSelector((state) => state.slider.isSliderOpen);

  const dispatch = useDispatch();

  useEffect(() => {
    resizeHandler(dispatch, toggleSlider);
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
          <TopCreators text={"Top Creators"} />
          <LatestShows text={"Latest Shows"} />
          <PodcastList text={"Stories"} />
          <div className="md:mt-44 mt-10">
            <TopCreators text={"Top Creators"} isTwoRows={true} />
          </div>
          <div className="md:mb-72 mb-10">
            <LatestShows text={"Latest Shows"} />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default StoriesContent;
