import React from "react";
import { useGitContributionData } from "./useGitContributionData";
import { WeeklyGitContribution } from "../types";

import "./HeatMap.css";

const getClassName = (maxDailyContribution: number, curVal: number) => {
  if (!maxDailyContribution || !curVal) {
    return "";
  }

  if (curVal === 0) {
    return "white";
  } else if (curVal < maxDailyContribution / 3) {
    return "light-green";
  } else if (curVal < (maxDailyContribution * 2) / 3) {
    return "green";
  } else {
    return "dark-green";
  }
};

export const HeatMap: React.FC = () => {
  const result = useGitContributionData();
  if (
    !result?.processedWeeklyGitContribution ||
    !result?.processedWeeklyGitContribution.length
  ) {
    return <div>HeatMap</div>;
  }
  return (
    <div className="heat-map">
      {result.processedWeeklyGitContribution.map(
        (weeklyGitContribution: WeeklyGitContribution) => {
          return (
            <div className="weekly-git-contribution-container">
              {weeklyGitContribution.days.map((dailyContribution: number) => {
                const className = getClassName(
                  result?.maxDailyContribution,
                  dailyContribution
                );
                return <span className={className} />;
              })}
            </div>
          );
        }
      )}
    </div>
  );
};

export default HeatMap;
