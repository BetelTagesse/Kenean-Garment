"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const StatisticsSingle = ({
  MyIcon,
  counter = 100, // default fallback
  description,
  iconColor = "text-green",
  textColor = "text-gray-200",
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView && !hasAnimated) {
      let start = 0;
      const end = parseInt(counter);
      const duration = 2000;
      const stepTime = 20;
      const steps = Math.ceil(duration / stepTime);
      const increment = Math.ceil(end / steps);

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(interval);
        }
        setCount(start);
      }, stepTime);

      setHasAnimated(true);
    }
  }, [inView, hasAnimated, counter]);

  return (
    <div
      ref={ref}
      className="md:w-4/3 lg:w-4/5 flex flex-col items-center justify-center p-3 lg:p-6"
    >
      <MyIcon className={`w-20 h-20 mb-6 ${iconColor}`} />
      <h2 className={`text-3xl font-bold ${textColor}`}>{count}+</h2>
      <p className={`text-lg text-center ${textColor}`}>{description}</p>
    </div>
  );
};

export default StatisticsSingle;
