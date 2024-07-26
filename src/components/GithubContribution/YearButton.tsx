import { MouseEventHandler } from "react";

export default function YearButton({
  year,
  currentYear,
  onClick,
}: {
  year: number;
  currentYear: number | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-lg text-center px-4 py-2 border border-transparent  hover:border-zinc-200 duration-100 text-sm font-medium ${
        year === currentYear
          ? " bg-primary text-white hover:border-transparent"
          : " dark:text-white text-zinc-800"
      }`}
      title={`View Graph for the year ${year}`}
    >
      {year}
    </button>
  );
}
