import { useState } from "react";
import GuideHero from "../components/guide/guideHero";
import GuideSidebar from "../components/guide/guideSidebar";
import LessonViewer from "../components/guide/lessonviewer";
import ChapterNavigation from "../components/guide/chapterNavigation";
import { course } from "../data/lesson";
import { lessonData } from "../data/lessonData";

type ChapterStatus = "pending" | "completed";

const Guide = () => {
  const [selectedChapter, setSelectedChapter] = useState("ch1");

  const [chapterStatus, setChapterStatus] = useState<
    Record<string, ChapterStatus>
  >(() => {
    const saved = localStorage.getItem("guidebook-chapter-status");
    return saved ? JSON.parse(saved) : {};
  });

  // All chapters
  const chapters = course.flatMap((level) => level.chapters);

  // Current lesson
  const lesson =
    lessonData[selectedChapter as keyof typeof lessonData];

  // Navigation
  const currentIndex = chapters.findIndex(
    (chapter) => chapter.id === selectedChapter
  );

  const previousChapter = chapters[currentIndex - 1];
  const nextChapter = chapters[currentIndex + 1];

  // Progress
  const completedChapters = Object.keys(chapterStatus).filter(
    (id) => chapterStatus[id] === "completed"
  );

  const completedCount = completedChapters.length;

  const progressPercentage =
    (completedCount / chapters.length) * 100;

  const isCompleted =
    chapterStatus[selectedChapter] === "completed";

  // Select chapter
  const handleChapterSelect = (chapterId: string) => {
    setSelectedChapter(chapterId);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Completed
  const handleMarkCompleted = () => {
    if (isCompleted) return;

    const updatedStatus: Record<string, ChapterStatus> = {
      ...chapterStatus,
      [selectedChapter]: "completed",
    };

    setChapterStatus(updatedStatus);

    localStorage.setItem(
      "guidebook-chapter-status",
      JSON.stringify(updatedStatus)
    );
  };

  const handleMarkPending = () => {
    const updatedStatus: Record<string, ChapterStatus> = {
      ...chapterStatus,
      [selectedChapter]: "pending",
    };

    setChapterStatus(updatedStatus);

    localStorage.setItem(
      "guidebook-chapter-status",
      JSON.stringify(updatedStatus)
    );
  };

  const handlePrevious = () => {
    if (previousChapter) {
      handleChapterSelect(previousChapter.id);
    }
  };

  const handleNext = () => {
    if (nextChapter) {
      handleChapterSelect(nextChapter.id);
    }
  };

  return (
    <main className="min-h-screen bg-slate-100">
      <GuideHero />

      <section className="px-4 py-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6">
          {/* LEFT SIDEBAR */}
          <div className="col-span-12 flex flex-col gap-5 lg:col-span-3">
            {/* Progress Card */}
            <div className="sticky top-1 mt-1 rounded-3xl bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-slate-700">
                    Course Progress
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {completedCount} of {chapters.length} chapters
                  </p>
                </div>

                <span className="text-sm font-bold text-indigo-600">
                  {Math.round(progressPercentage)}%
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className="h-full rounded-full bg-indigo-600 transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            <GuideSidebar
              selectedChapter={selectedChapter}
              onSelectChapter={handleChapterSelect}
              completedChapters={completedChapters}
            />
          </div>

          {/* LESSON */}
          <div className="col-span-12 lg:col-span-9">
            <LessonViewer
              lesson={lesson}
              status={chapterStatus[selectedChapter] ?? "pending"}
              onMarkCompleted={handleMarkCompleted}
              onMarkPending={handleMarkPending}
            />

            <ChapterNavigation
              onPrevious={handlePrevious}
              onNext={handleNext}
              hasPrevious={!!previousChapter}
              hasNext={!!nextChapter}
              previousTitle={previousChapter?.title}
              nextTitle={nextChapter?.title}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Guide;