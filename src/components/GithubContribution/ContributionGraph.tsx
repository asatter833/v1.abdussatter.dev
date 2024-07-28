import GitHubCalendar from "react-github-calendar";
import { useState } from "react";
import YearButton from "./YearButton";
import EmptyState from "./EmptyState";
import { github } from "./contribution-graph-theme";

export default function ContributionGraph() {
  const [calendarYear, setCalendarYear] = useState<number | undefined>(
    undefined
  );

  const today = new Date().getFullYear();
  const username = import.meta.env.VITE_API_GITHUB_USERNAME;
  const joinYear = Number(import.meta.env.VITE_API_GITHUB_JOIN_YEAR);
  const years = getGitHubYears(joinYear);

  if (!username || !joinYear)
    return (
      <EmptyState
        title="Unable to load Contribution Graph"
        message="We could not find any GitHub credentials added to the .env file. To display the graph, provide your username and the year you joined GitHub"
      />
    );

  return (
    <div className="flex flex-col lg:flex-row gap-4 ">
      <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-fit max-h-fit">
        <GitHubCalendar
          username={username}
          theme={github}
          blockSize={11}
          year={calendarYear}
        />
      </div>
      <div className="flex justify-start flex-row lg:flex-col flex-wrap gap-2">
        {years.slice(0, 5).map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() =>
              setCalendarYear(year === calendarYear ? undefined : year)
            }
          />
        ))}
      </div>
    </div>
  );
}

export function getGitHubYears(joinYear: number | undefined): number[] {
  if (!joinYear) return [];

  const currentYear = new Date().getFullYear();
  const duration = currentYear - joinYear + 1;
  const years = Array.from({ length: duration }, (_year, i) => currentYear - i);
  return years;
}
