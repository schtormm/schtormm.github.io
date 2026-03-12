import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "cv - storm's site",
  description: "storm's personal site",
};

export default function CV() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 px-5 py-12">
      <div className="max-w-xl mx-auto animate-fade-left">
        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors mb-8 group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">
            ←
          </span>
          <span>Back</span>
        </Link>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-6">
            Experience
          </h2>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-0 w-px bg-gray-200 dark:bg-gray-800" />

            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-indigo-500 border-2 border-gray-50 dark:border-gray-950 shadow-sm shadow-indigo-500/40" />
              <p className="text-xs text-gray-400 dark:text-gray-500 mb-1 font-medium">
                September 2024 – January 2025
              </p>
              <h3 className="font-semibold dark:text-white text-gray-900">
                <a
                  className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                  href="https://stager.co"
                  target="_blank"
                  rel="noreferrer"
                >
                  Stager
                </a>{" "}
                — Internship
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">
                Dutch SaaS company for event planning, ticket sales, marketing
                and more.
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Worked on a project refactoring and redesigning the customizable
                newsletter unsubscription flow for the company's clients. Also
                refactored various other parts of the application to bring them
                up to date with current style and structure.
              </p>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-gray-100 dark:border-gray-800 mb-12" />

        {/* Projects */}
        <section>
          <h2 className="text-xs font-semibold uppercase tracking-widest text-indigo-500 dark:text-indigo-400 mb-6">
            Projects
          </h2>

          <div className="flex flex-col gap-4">
            {/* Data Science Minor */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/60 transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <a
                  className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                  href="https://github.com/schtormm/datascience-project"
                >
                  Data Science Minor
                </a>
                <span className="text-xs bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                  Data Science
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Minor in "Data Science: Big Data / Open Data at{" "}
                <a
                  className="text-indigo-500 dark:text-indigo-400 hover:underline underline-offset-2 transition-colors"
                  href="https://hogeschoolrotterdam.nl"
                  target="_blank"
                >
                  RUAS
                </a>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Collaborated with three other students to try training multiple
                machine learning models to predict recessions using the{" "}
                <a
                  className="text-indigo-500 dark:text-indigo-400 hover:underline underline-offset-2 transition-colors"
                  href="https://www.rug.nl/ggdc/productivity/pwt/"
                  target="_blank"
                >
                  Penn World Table dataset
                </a>
                .
              </p>
            </div>
            {/* Semester 6 */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/60 transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Semester 6 — VR Application
                </h3>
                <span className="text-xs bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                  VR / Unity
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Interdisciplinary prototype for{" "}
                <a
                  className="text-indigo-500 dark:text-indigo-400 hover:underline underline-offset-2 transition-colors"
                  href="https://www.vonkrotterdam.nl/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Innovatiecentrum VONK
                </a>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Collaborated with four students to build a VR prototype using
                Unity, FastAPI, and the Oculus SDK to showcase the possibilities
                of VR in tourism.
              </p>
            </div>

            {/* Project D */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/60 transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  <a
                    className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-400 dark:hover:text-indigo-300 transition-colors"
                    href="https://github.com/pablosanderman/project-d"
                    target="_blank"
                  >
                    Project D
                  </a>
                </h3>
                <span className="text-xs bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                  React Native
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Room booking app prototype for{" "}
                <a
                  className="text-indigo-500 dark:text-indigo-400 hover:underline underline-offset-2 transition-colors"
                  href="https://eneco.nl"
                  target="_blank"
                  rel="noreferrer"
                >
                  Eneco
                </a>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Collaborated with four students to build a meeting room booking
                app using React Native, Expo, and Postgres.
              </p>
            </div>

            {/* Project C */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl p-5 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/60 transition-all">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  Project C
                </h3>
                <span className="text-xs bg-indigo-50 dark:bg-indigo-950/60 text-indigo-500 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-900/50 px-2 py-0.5 rounded-full whitespace-nowrap flex-shrink-0">
                  Next.js
                </span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <a
                  className="text-indigo-500 dark:text-indigo-400 hover:underline underline-offset-2 transition-colors"
                  href="https://en.wikipedia.org/wiki/OGSM"
                  target="_blank"
                  rel="noreferrer"
                >
                  OGSM
                </a>{" "}
                chart management webapp for{" "}
                <a
                  className="text-indigo-500 dark:text-indigo-400 hover:underline underline-offset-2 transition-colors"
                  href="https://centric.eu/en/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Centric
                </a>
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 leading-relaxed">
                Collaborated with two other students to build a strategic chart
                management webapp using Next.js.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
