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
          <ArrowRight className="w-8 h-8 bg-blue-800 rounded-md p-2 " />
        </div>
        <div>
          <Link className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
