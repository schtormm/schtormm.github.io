import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "links - storm's site",
  description:
    "storm's personal site - links to personal profiles and platforms",
};

export default function Links() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 px-5 py-12">
      <div className="max-w-sm mx-auto animate-fade-left">
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

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold dark:text-white tracking-tight">
            Links &amp; Profiles
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            A few places you can find or reach me.
          </p>
        </div>

        {/* Social links */}
        <div className="flex flex-col gap-3">
          <a
            href="https://github.com/schtormm"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 px-5 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/60 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-gray-900 dark:bg-gray-100 flex items-center justify-center flex-shrink-0">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-white dark:fill-gray-900"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900 dark:text-white text-sm">
                GitHub
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                schtormm
              </div>
            </div>
            <span className="ml-auto text-gray-300 dark:text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all text-sm">
              →
            </span>
          </a>

          <a
            href="https://bsky.schtormm.nl"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 px-5 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md hover:border-sky-100 dark:hover:border-sky-900/60 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-500 flex items-center justify-center flex-shrink-0">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.204-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900 dark:text-white text-sm">
                Bluesky
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                bsky.schtormm.nl
              </div>
            </div>
            <span className="ml-auto text-gray-300 dark:text-gray-600 group-hover:text-sky-400 group-hover:translate-x-0.5 transition-all text-sm">
              →
            </span>
          </a>

          <a
            href="mailto:hi@schtormm.nl"
            className="flex items-center gap-4 px-5 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-100 dark:hover:border-indigo-900/60 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-indigo-500 flex items-center justify-center flex-shrink-0">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900 dark:text-white text-sm">
                Mail
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                hi@schtormm.nl
              </div>
            </div>
            <span className="ml-auto text-gray-300 dark:text-gray-600 group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all text-sm">
              →
            </span>
          </a>

          <a
            href="https://twitter.com/schtormm"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 px-5 py-4 bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md hover:border-gray-200 dark:hover:border-gray-700 transition-all group"
          >
            <div className="w-10 h-10 rounded-xl bg-sky-400 flex items-center justify-center flex-shrink-0">
              <svg
                role="img"
                viewBox="0 0 24 24"
                className="w-5 h-5 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </div>
            <div>
              <div className="font-medium text-gray-900 dark:text-white text-sm">
                Twitter
              </div>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                schtormm &middot; no longer active
              </div>
            </div>
            <span className="ml-auto text-gray-300 dark:text-gray-600 group-hover:text-gray-500 dark:group-hover:text-gray-400 group-hover:translate-x-0.5 transition-all text-sm">
              →
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
