"use client";

import BiodataProfile from "@/components/Bio-Data-Profile";
import HemaliBioDataProfile from "@/components/Hemali-BioData-Profile";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";


export default function Home() {
  const [activeProfile, setActiveProfile] = useState("Kaushal");

  return (
    <div className="p-5">
      {/* Button Group */}
      <div className="flex gap-4 mb-6">
        <Button
          onClick={() => setActiveProfile("Kaushal")}
          className={`${
            activeProfile === "Kaushal" ? "bg-blue-600 text-white" : "bg-gray-200"
          } px-4 py-2 rounded-lg shadow`}
        >
          Kaushal
        </Button>
        <Button
          onClick={() => setActiveProfile("Hemali")}
          className={`${
            activeProfile === "Hemali" ? "bg-blue-600 text-white" : "bg-gray-200"
          } px-4 py-2 rounded-lg shadow`}
        >
          Hemali
        </Button>
      </div>

      {/* Conditional Rendering */}
      <div className="border rounded-lg shadow-lg p-6 bg-white">
        {activeProfile === "Kaushal" ? <BiodataProfile /> : <HemaliBioDataProfile />}
      </div>
    </div>
  );
}
