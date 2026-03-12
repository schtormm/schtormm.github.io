import Image from "next/image";
import Link from "next/link";
import profile from "../public/images/profile.jpeg";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-5 py-12">
      <div className="w-full max-w-md animate-fade-right">
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg dark:shadow-black/40 overflow-hidden">
          <div className="p-8">
            {/* Profile image with gradient ring */}
            <div className="flex flex-col items-center mb-6">
              <div className="p-0.5 rounded-[18px] bg-gradient-to-br from-indigo-500 to-purple-500 mb-5 shadow-md shadow-indigo-500/20">
                <Image
                  src={profile}
                  alt="Storm"
                  width={110}
                  height={110}
                  className="rounded-2xl block"
                />
              </div>
              <h1 className="text-2xl font-semibold dark:text-white tracking-tight">
                Hi, I'm Storm 👋
              </h1>
            </div>

            {/* Bio */}
            <div className="text-center space-y-2 mb-6">
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                Informatica student at the{" "}
                <a
                  className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-400 dark:hover:text-indigo-300 underline underline-offset-2 transition-colors"
                  href="https://www.rotterdamuas.com/about/organisation/schools/school-of-communication-media-and-information-technology/welcome/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rotterdam University of Applied Sciences
                </a>
                .
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                I like simracing and tech — from open source software to old
                consoles.
              </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 dark:border-gray-800 mb-6" />

            {/* Navigation links */}
            <div className="flex flex-col gap-2.5">
              <Link
                className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-gray-100 dark:border-gray-700/50 hover:border-indigo-200 dark:hover:border-indigo-800 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 transition-all group"
                href="/links"
              >
                <span>Contact &amp; Profiles</span>
                <span className="text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </Link>
              <Link
                className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800/60 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 border border-gray-100 dark:border-gray-700/50 hover:border-indigo-200 dark:hover:border-indigo-800 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 transition-all group"
                href="/cv"
              >
                <span>Experience &amp; Projects</span>
                <span className="text-indigo-400 group-hover:translate-x-0.5 transition-transform">
                  →
                </span>
              </Link>
            </div>

            {/* Credit */}
            <p className="text-xs text-gray-400 dark:text-gray-600 text-center mt-6">
              Credit to{" "}
              <a
                className="text-purple-400 hover:text-purple-300 transition-colors"
                href="https://github.com/Matthbo"
                target="_blank"
              >
                Vivy
              </a>{" "}
              for parts of the design.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
