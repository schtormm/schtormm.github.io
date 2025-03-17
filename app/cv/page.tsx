export default function Home() {
  return (
    <div className="min-h-[100vh] bg-gray-50 dark:bg-gray-950">
      <div className="pt-10 flex flex-col items-center justify-center gap-10">
        <div>
          <h1 className="text-3xl text-center dark:text-white">Experience</h1>
          <div className="w-sm flex flex-col items-center gap-4">
            <h2 className=" font-bold dark:text-white">
              September 2024 - January 2025
            </h2>
            <div className="flex items-center gap-2">
              <div className="border-l-2 border-purple-500 h-12 my-2"></div>
              <div className="flex flex-col">
                <h1 className="dark:text-white text-xl">
                  <a href="https://stager.co">Stager</a>
                </h1>
                <article className="dark:text-white text-sm">
                  Dutch SaaS company for event planning, ticket sales, marketing
                  and more
                </article>
              </div>
            </div>
            <p className="wp dark:text-white text-wrap">
              Worked on a project refactoring and redesigning the customizable
              newsletter unsubscription page for the company's clients.
            </p>
          </div>
        </div>
        <h1 className="text-3xl text-center dark:text-white">Projects</h1>
        <div className="w-sm">
          <h1 className="dark:text-white text-xl">Project D</h1>
          <article className="dark:text-white text-sm">
            Part of the "Project D" course, to showcase to{" "}
            <a href="https://eneco.nl">Eneco</a>
          </article>
        </div>
      </div>
    </div>
  );
}
