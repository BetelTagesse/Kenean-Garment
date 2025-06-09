"use client";
import React, { useEffect, useState } from "react";

const StatisticsSingle = ({
  MyIcon,
  counter,
  description,
  iconColor = "text-green",
  textColor = " text-gray-200",
}) => {
  const target = parseInt(counter);
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = Math.ceil(target / 10) || 0;
    const end = target;
    const duration = 2000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const increment = Math.ceil(end / totalSteps);

    const counterInterval = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counterInterval);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(counterInterval);
  }, [target]);

  return (
    <div className="md:w-4/3 lg:w-4/5 flex flex-col items-center justify-center    p-3 lg:p-6  ">
      <MyIcon className={`w-20 h-20 text-green mb-10 ${iconColor}`} />
      <h2 className={`text-3xl  font-bold ${textColor} `}>{count} +</h2>
      <p className={` ${textColor} font-normal text-lg text-start`}>
        {description}
      </p>
    </div>
  );
};

export default StatisticsSingle;
