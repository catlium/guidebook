import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronRight,
  Clock,
  Check,
} from "lucide-react";
import { course } from "../../data/lesson";

type Props = {
  selectedChapter: string;
  onSelectChapter: (chapterId: string) => void;
  completedChapters: string[];
};

const GuideSidebar = ({
  selectedChapter,
  onSelectChapter,
  completedChapters,
}: Props) => {
  const selectedLevel = course.find((level) =>
    level.chapters.some(
      (chapter) => chapter.id === selectedChapter
    )
  );

  const [openLevels, setOpenLevels] = useState<string[]>(
    selectedLevel ? [selectedLevel.id] : ["level1"]
  );

  const toggleLevel = (levelId: string) => {
    setOpenLevels((prev) =>
      prev.includes(levelId)
        ? prev.filter((id) => id !== levelId)
        : [...prev, levelId]
    );
  };

  useEffect(() => {
    const level = course.find((level) =>
      level.chapters.some(
        (chapter) => chapter.id === selectedChapter
      )
    );

    if (level) {
      setOpenLevels((prev) =>
        prev.includes(level.id)
          ? prev
          : [...prev, level.id]
      );
    }
  }, [selectedChapter]);

  return (
    <aside className="sticky top-31 overflow-hidden rounded-3xl bg-white shadow-sm">

      {/* HEADER */}
      <div className="border-b border-slate-200 p-5">
        <p className="text-xs font-semibold uppercase tracking-wider text-indigo-600">
          Course Contents
        </p>

        <h2 className="mt-1 text-xl font-bold text-slate-800">
          NGO Digital Skills
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          6 Levels · 18 Chapters
        </p>
      </div>

      {/* LEVELS */}
      <div className="p-3">

        {course.map((level) => {
          const isOpen = openLevels.includes(level.id);

          const completedInLevel =
            level.chapters.filter((chapter) =>
              completedChapters.includes(chapter.id)
            ).length;

          return (
            <div key={level.id} className="mb-2">

              {/* LEVEL BUTTON */}
              <button
                onClick={() => toggleLevel(level.id)}
                className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition hover:bg-slate-50"
              >

                <div className="flex min-w-0 items-center gap-3">

                  {/* LEVEL NUMBER */}
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-sm font-bold ${
                      completedInLevel === level.chapters.length
                        ? "bg-green-100 text-green-700"
                        : isOpen
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {completedInLevel === level.chapters.length ? (
                      <Check size={18} strokeWidth={3} />
                    ) : (
                      level.level.replace("Level ", "")
                    )}
                  </div>

                  {/* LEVEL NAME */}
                  <div className="min-w-0">

                    <p className="text-xs font-medium text-slate-400">
                      {level.level}
                    </p>

                    <p className="truncate text-sm font-semibold text-slate-700">
                      {level.title}
                    </p>

                  </div>

                </div>

                {/* ARROW */}
                {isOpen ? (
                  <ChevronDown
                    size={18}
                    className="shrink-0 text-slate-400"
                  />
                ) : (
                  <ChevronRight
                    size={18}
                    className="shrink-0 text-slate-400"
                  />
                )}

              </button>

              {/* CHAPTERS */}
              {isOpen && (
                <div className="ml-4 border-l border-slate-200 pl-3">

                  {level.chapters.map((chapter) => {

                    const isSelected =
                      selectedChapter === chapter.id;

                    const isCompleted =
                      completedChapters.includes(chapter.id);

                    return (
                      <button
                        key={chapter.id}
                        onClick={() =>
                          onSelectChapter(chapter.id)
                        }
                        className={`group mb-1 flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition ${
                          isSelected
                            ? "bg-indigo-50 text-indigo-700"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >

                        {/* STATUS ICON */}
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                            isCompleted
                              ? "bg-green-500 text-white"
                              : isSelected
                              ? "bg-indigo-600 text-white"
                              : "bg-slate-100 text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600"
                          }`}
                        >
                          {isCompleted ? (
                            <Check
                              size={12}
                              strokeWidth={3}
                            />
                          ) : (
                            <span className="text-[10px] font-bold">
                              {chapter.id.replace("ch", "")}
                            </span>
                          )}
                        </div>

                        {/* CHAPTER INFO */}
                        <div className="min-w-0 flex-1">

                          <p
                            className={`text-sm leading-5 ${
                              isSelected
                                ? "font-semibold"
                                : isCompleted
                                ? "font-medium text-slate-500"
                                : "font-medium"
                            }`}
                          >
                            {chapter.title}
                          </p>

                          <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                            <Clock size={12} />
                            <span>{chapter.duration}</span>
                          </div>

                        </div>

                      </button>
                    );
                  })}

                </div>
              )}

            </div>
          );
        })}

      </div>
    </aside>
  );
};

export default GuideSidebar;