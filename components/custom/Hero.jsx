"use client";

import lookup from "@/data/lookup";
import React, { useState } from "react";
import { Link, ArrowRight } from "lucide-react";

const Hero = () => {
  const [userInput, setUserInp] = useState("");
  return (
    <div className="flex flex-col items-center mt-24 xl:mt-36 gap-2">
      <h2 className="text-4xl  font-bold ">{lookup.HERO_HEADING}</h2>
      <p className="text-gray-300 font-medium">{lookup.HERO_DESC}</p>
      <div className="p-5 border rounded-xl max-w-2xl w-full mt-3">
        <div className="flex gap-2">
          <textarea
            onChange={(e) => setUserInp(e.target.value)}
            className="outline-none bg-transparent w-full h-32 max-h-56  resize"
            placeholder={lookup.INPUT_PLACEHOLDER}
          />
          {userInput && (
            <ArrowRight
              onClick={() => {
                console.log("clicked");
              }}
              className="w-8 h-8 cursor-pointer bg-blue-800 rounded-md p-2 "
            />
          )}
        </div>
        <div>
          <Link className="h-5 w-5" />
        </div>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-4 mt-4 max-w-4xl mx-auto">
        {lookup.SUGGESTIONS.map((suggestion) => (
          <div className=" cursor-pointer border border-gray-800 text-xs rounded-2xl px-4 py-1 hover:border-gray-700 duration-300 ">
            {suggestion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
