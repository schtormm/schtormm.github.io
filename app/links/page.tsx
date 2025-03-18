export default function Home() {
  return (
    <main>
      <div className="bg-gray-50 dark:bg-gray-950 min-h-[100dvh]">
        <div className="flex flex-col items-center justify-center gap-4 pt-10">
          <h1 className="text-3xl text-center dark:text-white">
            Links and profiles
          </h1>
          <p className="text-center dark:text-white">
            If you need to send me a message, here's a few platforms to do that
            on!
          </p>
          <a
            className="dark:text-white text-xl px-5 py-2 bg-gray-400 rounded-md"
            href="https://github.com/schtormm"
          >
            <span>
              <i></i>GitHub
            </span>
          </a>
          <a
            className="dark:text-white text-xl px-5 py-2 bg-sky-400 rounded-md"
            href="https://bsky.schtormm.nl"
            id="bluesky"
          >
            <span>
              <i></i>BlueSky
            </span>
          </a>
          <a
            className="dark:text-white text-xl px-5 py-2 bg-slate-400 rounded-md"
            href="https://mas.to/@storm"
            id="mastodon"
          >
            <span>
              <i></i>Mastodon
            </span>
          </a>
          <a
            className="dark:text-white text-xl px-5 py-2 bg-slate-600 rounded-md"
            href="https://twitter.com/schtormm"
            id="twitter"
          >
            <span>
              <i></i>Twitter
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
