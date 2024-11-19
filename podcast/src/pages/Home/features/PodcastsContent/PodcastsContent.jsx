import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSlider } from "../../../../app/slices/sliderSlice";
import Footer from "../../../../components/Footer/Footer";
import Navbar from "../../../../components/Navbar/Navbar";
import LatestShows from "../../../../components/Podcasts/LatestShows/LatestShows";
import PodcastList from "../../../../components/Podcasts/PodcastList/PodcastList";
import TopCreators from "../../../../components/Podcasts/TopCreators/TopCreators";
import Player from "../../../../components/Player/Player";
import UserSlider from "../../../Home/features/UserSlider/UserSlider";
import SliderDiv from "../../../../components/SliderDiv/SliderDiv";

const PodcastsContent = () => {
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
      const scrollThreshold = 200;
      if (isUserViewOpen && isMobile && window.scrollY > scrollThreshold) {
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
        <SliderDiv isUserViewOpen={isUserViewOpen} />

        <div
          className={`${
            isUserViewOpen ? "md:col-span-10" : "md:col-span-12"
          } col-span-12 text-white bg-black relative h-auto px-4 md:px-10 py-10`}>
          <TopCreators text={"Top Creators"} />
          <LatestShows text={"Latest Shows"} />
          <PodcastList />
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

export default PodcastsContent;
