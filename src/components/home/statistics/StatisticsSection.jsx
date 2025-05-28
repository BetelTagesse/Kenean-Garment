"use client";
import React from "react";
import { Award, Globe, Layers, Users } from "lucide-react";
import StatisticsSingle from "./StatisticsSingle";

const StatisticsSection = () => {
  return (
    <div className="bg-purple w-full h-[280px] flex justify-center items-center">
      <div className="w-full max-w-7xl px-auto flex justify-between items-center gap-6">
        <StatisticsSingle
          MyIcon={Globe}
          counter="1000"
          description="Satisfied Clients"
        />
        <StatisticsSingle
          MyIcon={Layers}
          counter="200"
          description="Completed Projects"
        />
        <StatisticsSingle
          MyIcon={Users}
          counter="25"
          description="Experience"
        />
        <StatisticsSingle
          MyIcon={Award}
          counter="40"
          description="Win Awards"
        />
      </div>
    </div>
  );
};

export default StatisticsSection;
