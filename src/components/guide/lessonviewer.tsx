import { lessonData } from "../../data/lessonData";
import { CheckCircle } from "lucide-react";

type Lesson = (typeof lessonData)[keyof typeof lessonData];

type ChapterStatus = "pending" | "completed";

type Props = {
  lesson: Lesson;
  status: ChapterStatus;
  onMarkCompleted: () => void;
  onMarkPending: () => void;
};

const LessonViewer = ({
  lesson,
  status,
  onMarkCompleted,
  onMarkPending,
}: Props) => {
  const isCompleted = status === "completed";
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">

      {/* MIDDLE - LEARNING CONTENT */}
      <article className="rounded-3xl bg-white p-7 shadow-sm">

        {/* HEADER */}
        <header className="border-b border-slate-200 pb-7">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
              Beginner
            </span>

            <span className="text-sm text-slate-500 animate-pulse">
              {lesson.duration}
            </span>

            {isCompleted && (
              <span className="flex items-center gap-1 rounded-full bg-green-50 px-3 py-1 text-sm font-medium text-green-600">
                <CheckCircle size={15} />
                Completed
              </span>
            )}
          </div>

          <h1 className="mt-4 text-4xl font-bold text-start leading-tight text-slate-800">
            {lesson.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {lesson.overview}
          </p>
        </header>

        {/* OBJECTIVES */}
        {lesson.objectives && lesson.objectives.length > 0 && (
          <section className="mt-8 rounded-2xl border border-indigo-100 bg-indigo-50 p-6">
            <h2 className="text-xl font-bold text-slate-800">
              What you will learn
            </h2>

            <ul className="mt-4 space-y-3">
              {lesson.objectives.map((objective, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-slate-600"
                >
                  <span className="mt-1 text-indigo-600">✓</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* STEPS */}
        <section className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600 pb-2">
            Learn step by step
          </p>

          <h2 className="mt-1 text-2xl font-bold text-slate-800">
            How to do it
          </h2>

          <div className="mt-6 space-y-6">
            {lesson.steps.map((step, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex gap-4">

                  {/* STEP NUMBER */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                    {index + 1}
                  </div>

                  <div className="min-w-0 flex-1">

                    <h3 className="text-xl font-semibold text-slate-800">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {step.description}
                    </p>

                    {step.image && (
                      <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white">
                        <img
                          src={step.image}
                          alt={step.title}
                          className="max-h-112.5 w-full object-contain"
                        />
                      </div>
                    )}

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TIPS */}
        {lesson.tips && lesson.tips.length > 0 && (
          <section className="mt-8 rounded-2xl border border-amber-100 bg-amber-50 p-6">
            <h2 className="text-xl font-bold text-slate-800">
              Helpful Tips
            </h2>

            <ul className="mt-4 space-y-3">
              {lesson.tips.map((tip, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-slate-600"
                >
                  <span className="text-amber-600">💡</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* PRACTICE */}
        {lesson.exercise && (
          <div className="mt-6 flex flex-wrap gap-3">
            {/* Pending */}
            <button
              onClick={onMarkPending}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition ${status === "pending"
                  ? "bg-amber-500 text-white shadow-sm"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
            >
              ⏳ Pending
            </button>

            {/* Completed */}
            <button
              onClick={onMarkCompleted}
              className={`flex items-center gap-2 rounded-xl px-5 py-3 font-medium transition ${status === "completed"
                  ? "bg-green-600 text-white shadow-sm"
                  : "border border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                }`}
            >
              <CheckCircle size={18} />
              Completed
            </button>
          </div>
        )}
      </article>

      {/* RIGHT - VIDEO / RESOURCES */}
      <aside className="space-y-5 xl:sticky xl:top-24">

        {/* OWN VIDEO */}
        {lesson.video && (
          <section className="overflow-hidden rounded-3xl bg-white shadow-sm">

            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
                GuideBook Video
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-800">
                Watch and Learn
              </h2>
            </div>

            <div className="bg-slate-900">
              <video
                controls
                className="aspect-video w-full"
              >
                <source
                  src={lesson.video}
                  type="video/mp4"
                />

                Your browser does not support video playback.
              </video>
            </div>

          </section>
        )}

        {/* YOUTUBE */}
        {lesson.youtubeVideo && (
          <section className="overflow-hidden rounded-3xl bg-white shadow-sm">

            <div className="p-5">
              <p className="text-sm font-semibold uppercase tracking-wide text-red-500">
                YouTube
              </p>

              <h2 className="mt-1 text-xl font-bold text-slate-800">
                Another Explanation
              </h2>
            </div>

            <div className="aspect-video bg-slate-900">
              <iframe
                src={lesson.youtubeVideo.replace(
                  "watch?v=",
                  "embed/"
                )}
                title="YouTube lesson video"
                className="h-full w-full"
                allowFullScreen
              />
            </div>

          </section>
        )}

        {/* RESOURCE */}
        {lesson.resource && (
          <section className="rounded-3xl bg-white p-5 shadow-sm">

            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Helpful Resources
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-800">
              Learn More
            </h2>

            <div className="mt-4">

              <a
                href={lesson.resource.file}
                download
                className="block rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:bg-indigo-50"
              >
                <h3 className="font-semibold text-slate-800">
                  {lesson.resource.title}
                </h3>

                <p className="mt-1 text-sm leading-6 text-slate-500">
                  Practice material for this chapter.
                </p>

                <span className="mt-2 inline-block text-sm font-medium text-indigo-600">
                  Download resource →
                </span>
              </a>

            </div>

          </section>
        )}

      </aside>
    </div>
  );
};

export default LessonViewer;