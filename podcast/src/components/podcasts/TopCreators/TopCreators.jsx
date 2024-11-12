import React from "react";
import creators from "../../../utils/json/topCreators.json";
import CreatorCard from "./CreatorCard";

const TopCreators = () => {
  return (
    <>
      <div className="flex items-center justify-between md:pr-0 pr-4">
        <p className="md:text-2xl text-xl">Top Creators</p>
        <p className="text-sm text-gray-400">See all</p>
      </div>
      <div className="my-5 overflow-x-auto flex space-x-4 w-full scrollbar-thin scrollbar-thumb-gray-400">
        {creators.map((creator) => (
          <div key={creator.id} className="flex-shrink-0">
            <CreatorCard creator={creator} />
          </div>
        ))}
      </div>
    </>
  );
};

export default TopCreators;
