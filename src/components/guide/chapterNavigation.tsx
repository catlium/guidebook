import { ChevronLeft, ChevronRight } from "lucide-react";

interface ChapterNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
  previousTitle?: string;
  nextTitle?: string;
}

const ChapterNavigation = ({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
  previousTitle,
  nextTitle,
}: ChapterNavigationProps) => {
  return (
    <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-200 pt-6">

      {/* Previous */}
      <button
        onClick={onPrevious}
        disabled={!hasPrevious}
        className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 text-left transition hover:border-indigo-300 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <ChevronLeft
          size={20}
          className="transition group-hover:-translate-x-1"
        />

        <div>
          <p className="text-xs text-slate-400">
            Previous Chapter
          </p>

          <p className="font-semibold text-slate-700">
            {previousTitle || "Start of course"}
          </p>
        </div>
      </button>

      {/* Next */}
      <button
        onClick={onNext}
        disabled={!hasNext}
        className="group flex items-center justify-end gap-3 rounded-xl border border-slate-200 bg-white p-4 text-right transition hover:border-indigo-300 hover:bg-indigo-50 disabled:cursor-not-allowed disabled:opacity-40"
      >
        <div>
          <p className="text-xs text-slate-400">
            Next Chapter
          </p>

          <p className="font-semibold text-slate-700">
            {nextTitle || "Course completed"}
          </p>
        </div>

        <ChevronRight
          size={20}
          className="transition group-hover:translate-x-1"
        />
      </button>

    </div>
  );
};

export default ChapterNavigation;