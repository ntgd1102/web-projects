import React from 'react';
import { useGitContributionData } from './useGitContributionData';
import './HeatMap.css';

const getClassName = (maxDailyContribution, curVal) => {
  if (!maxDailyContribution || !curVal) {
    return '';
  }

  if (curVal === 0) {
    return 'white';
  } else if (curVal < maxDailyContribution / 3) {
    return 'light-green';
  } else if (curVal < (maxDailyContribution * 2) / 3) {
    return 'green';
  } else {
    return 'dark-green';
  }
};

export const HeatMap = () => {
  const result = useGitContributionData();
  if (
    !result?.processedWeeklyGitContribution ||
    !result?.processedWeeklyGitContribution.length
  ) {
    return <div>HeatMap</div>;
  }
  return (
    <div className="heat-map">
      {result.processedWeeklyGitContribution.map((weeklyGitContribution) => {
        return (
          <div className="weekly-git-contribution-container">
            {weeklyGitContribution.days.map((dailyContribution) => {
              const className = getClassName(
                  result?.maxDailyContribution,
                  dailyContribution,
              );
              return <span className={className} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default HeatMap;
