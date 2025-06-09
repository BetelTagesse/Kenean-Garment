"use client";
import { Award, CalendarCheck, Layers, Users2 } from "lucide-react";
import StatisticsSingle from "./StatisticsSingle";

const StatisticsSection = ({ className = "", bgColor = "bg-purple" }) => {
  return (
    <div
      className={`  w-full sm:h-[500px] md:h-[280px]  flex justify-center items-center ${bgColor} ${className}`}
    >
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 text-center justify-items-center">
          <StatisticsSingle
            MyIcon={Users2}
            counter="1000"
            description="Satisfied Clients"
            className=""
          />
          <StatisticsSingle
            MyIcon={Layers}
            counter="200"
            description="Completed Projects"
          />
          <StatisticsSingle
            MyIcon={CalendarCheck}
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
    </div>
  );
};

export default StatisticsSection;
