import type { Lesson } from "../../data/lesson";

type Props = {
  lesson: Lesson;
};

const LessonViewer = ({ lesson }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">

      {/* ========================= */}
      {/* MIDDLE - LEARNING CONTENT */}
      {/* ========================= */}

      <article className="rounded-3xl bg-white p-7 shadow-sm">

        {/* Lesson Header */}

        <header className="border-b border-slate-200 pb-7">

          <div className="flex items-center gap-3">
            <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
              Beginner
            </span>

            <span className="text-sm text-slate-500">
              {lesson.time}
            </span>
          </div>

          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-800">
            {lesson.title}
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-600">
            {lesson.description}
          </p>

        </header>


        {/* ========================= */}
        {/* LEARNING STEPS */}
        {/* ========================= */}

        <section className="mt-8">

          <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
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

                  {/* Number */}

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                    {index + 1}
                  </div>


                  {/* Content */}

                  <div className="min-w-0 flex-1">

                    <h3 className="text-xl font-semibold text-slate-800">
                      {step.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {step.description}
                    </p>


                    {/* Step Image */}

                    {step.image && (
                      <div className="mt-5 overflow-hidden rounded-xl border border-slate-200 bg-white">

                        <img
                          src={step.image}
                          alt={step.title}
                          className="max-h-[450px] w-full object-contain"
                        />

                      </div>
                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* ========================= */}
        {/* PRACTICE */}
        {/* ========================= */}

        {lesson.practice && (
          <section className="mt-8 rounded-3xl border border-indigo-100 bg-indigo-50 p-7">

            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Practice
            </p>

            <h2 className="mt-2 text-2xl font-bold text-slate-800">
              {lesson.practice.title}
            </h2>

            <p className="mt-3 leading-7 text-slate-600">
              {lesson.practice.description}
            </p>

            <button className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition hover:bg-indigo-700">
              ✓ Mark as completed
            </button>

          </section>
        )}

      </article>


      {/* ========================= */}
      {/* RIGHT - VIDEO / RESOURCES */}
      {/* ========================= */}

      <aside className="space-y-5 xl:sticky xl:top-24">

        {/* Own Video */}

        {lesson.ownVideo && (
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
                  src={lesson.ownVideo}
                  type="video/mp4"
                />

                Your browser does not support video playback.

              </video>

            </div>

          </section>
        )}


        {/* YouTube */}

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


        {/* Resources */}

        {lesson.resources && lesson.resources.length > 0 && (
          <section className="rounded-3xl bg-white p-5 shadow-sm">

            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">
              Helpful Resources
            </p>

            <h2 className="mt-1 text-xl font-bold text-slate-800">
              Learn More
            </h2>


            <div className="mt-4 space-y-3">

              {lesson.resources.map((resource) => (

                <a
                  key={resource.url}
                  href={resource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl border border-slate-200 p-4 transition hover:border-indigo-300 hover:bg-indigo-50"
                >

                  <h3 className="font-semibold text-slate-800">
                    {resource.title}
                  </h3>

                  {resource.description && (
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {resource.description}
                    </p>
                  )}

                  <span className="mt-2 inline-block text-sm font-medium text-indigo-600">
                    Open resource →
                  </span>

                </a>

              ))}

            </div>

          </section>
        )}

      </aside>

    </div>
  );
};

export default LessonViewer;