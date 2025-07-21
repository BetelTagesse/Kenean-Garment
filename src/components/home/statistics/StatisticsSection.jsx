"use client";
import { Award, CalendarCheck, Layers, Users2 } from "lucide-react";
import StatisticsSingle from "./StatisticsSingle";

const StatisticsSection = ({
  bgColor = "bg-purple",
  iconColor = "text-green",
  textColor = "text-white",
}) => {
  return (
    <div
      className={`  w-full sm:h-[500px] md:h-[280px]  flex justify-center items-center ${bgColor} `}
    >
      <div className="w-full max-w-7xl px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 text-center justify-items-center">
          <StatisticsSingle
            MyIcon={Users2}
            counter="500"
            description="Satisfied Clients"
            iconColor={iconColor}
            textColor={textColor}
          />
          <StatisticsSingle
            MyIcon={Layers}
            counter="200"
            description="Completed Projects"
            iconColor={iconColor}
            textColor={textColor}
          />
          <StatisticsSingle
            MyIcon={CalendarCheck}
            counter="7"
            description="Experience"
            iconColor={iconColor}
            textColor={textColor}
          />
          <StatisticsSingle
            MyIcon={Award}
            counter="10"
            description="Win Awards"
            iconColor={iconColor}
            textColor={textColor}
          />
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;
