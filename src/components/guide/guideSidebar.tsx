import { useState } from "react";
import type { Chapter, Lesson } from "../../data/lesson";

type Props = {
  chapters: Chapter[];
  selectedLesson: Lesson;
  onSelectLesson: (lesson: Lesson) => void;
};

const GuideSidebar = ({
  chapters,
  selectedLesson,
  onSelectLesson,
}: Props) => {
  const [openChapter, setOpenChapter] = useState(chapters[0].id);

  return (
    <aside className="sticky top-24 rounded-3xl bg-white p-5 shadow-sm">
      <h2 className="mb-4 text-xl font-bold text-slate-800">
        Guide Chapters
      </h2>

      <div className="space-y-3">
        {chapters.map((chapter) => (
          <div
            key={chapter.id}
            className="overflow-hidden rounded-xl border border-slate-200"
          >
            {/* Chapter */}
            <button
              onClick={() =>
                setOpenChapter(
                  openChapter === chapter.id ? "" : chapter.id
                )
              }
              className={`flex w-full items-center justify-between p-4 text-left transition ${
                openChapter === chapter.id
                  ? "bg-indigo-50"
                  : "bg-white hover:bg-slate-50"
              }`}
            >
              <h3 className="font-semibold text-slate-800">
                {chapter.name}
              </h3>

              <span className="text-xl text-slate-500">
                {openChapter === chapter.id ? "−" : "+"}
              </span>
            </button>

            {/* Lessons */}
            {openChapter === chapter.id && (
              <div className="border-t border-slate-200 bg-slate-50 p-2">
                {chapter.lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => onSelectLesson(lesson)}
                    className={`mb-1 w-full rounded-lg px-3 py-2 text-left text-sm transition ${
                      selectedLesson.id === lesson.id
                        ? "bg-indigo-100 font-medium text-indigo-700"
                        : "text-slate-600 hover:bg-white hover:text-slate-900"
                    }`}
                  >
                    {lesson.title}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </aside>
  );
};

export default GuideSidebar;