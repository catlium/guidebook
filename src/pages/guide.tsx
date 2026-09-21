import { useState } from "react";

import GuideHero from "../components/guide/guideHero";
import GuideSidebar from "../components/guide/guideSidebar";
import LessonViewer from "../components/guide/lessonviewer";

import { chapters } from "../data/lesson";

const Guide = () => {
  const [selectedLesson, setSelectedLesson] = useState(
    chapters[0].lessons[0]
  );

  return (
    <main className="min-h-screen bg-slate-50">
      <GuideHero />

      <section className="w-full px-4 py-8 lg:px-6">
        <div className="flex items-start gap-5">

          {/* LEFT - CHAPTERS */}
          <div className="w-64 shrink-0">
            <GuideSidebar
              chapters={chapters}
              selectedLesson={selectedLesson}
              onSelectLesson={setSelectedLesson}
            />
          </div>

          {/* MIDDLE + RIGHT */}
          <div className="min-w-0 flex-1">
            <LessonViewer lesson={selectedLesson} />
          </div>

        </div>
      </section>
    </main>
  );
};

export default Guide;