import { useEffect, useState } from 'react'
import {WeeklyGitContribution} from "../types";

const FETCH_API = 'https://api.github.com/repos/facebook/react/stats/commit_activity';

export const processGitContributionJson = (gitContributionJson?: WeeklyGitContribution[]) => {
    if (!gitContributionJson) {
        return null;
    }
    const maxDailyContribution = gitContributionJson.reduce((previousMaxDailyContribution, currentDailyContribution) => {
        const maxNumOfWeek = currentDailyContribution.days.reduce((previousMax, curVal) => {
            return previousMax > curVal ? previousMax : curVal;
        }, 0);
        return maxNumOfWeek > previousMaxDailyContribution ? maxNumOfWeek: previousMaxDailyContribution;
    }, 0);
    const processedWeeklyGitContribution = gitContributionJson.sort((a, b) => {
        return a.week - b.week;
    });
    return { maxDailyContribution, processedWeeklyGitContribution };
}

export const useGitContributionData = () => {
    const [gitContributionData, setGitContributionData] = useState(undefined);
    useEffect(() => {
        fetch(FETCH_API)
            .then(res => res.json())
            .then(data => setGitContributionData(data))
    }, []);
    return processGitContributionJson(gitContributionData)
}
