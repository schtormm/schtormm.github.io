import Image from "next/image";
import profile from "../public/images/profile.jpeg";
export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-center min-h-[100dvh] bg-gray-50 dark:bg-gray-950">
        <div className="p-20 mx-auto bg-gray-200 dark:bg-gray-900 shadow-lg dark:shadow-purple-900/60 rounded-xl">
          <div className="mb-4">
            <Image
              src={profile}
              alt="Storm"
              width={200}
              height={200}
              className="rounded-2xl mx-auto"
            />
            <h1 className="text-3xl text-center mt-4 dark:text-white">
              Hi! I'm Storm <i></i>
            </h1>
            <div className="text-center mt-4 dark:text-white">
              I'm an informatica student at the{" "}
              <a
                className="text-purple-600"
                href="https://www.rotterdamuas.com/about/organisation/schools/school-of-communication-media-and-information-technology/welcome/"
              >
                Rotterdam University of Applied Sciences
              </a>
              .
              <p className="mt-2">
                {" "}
                I like racing games and tech (anything from open source software
                to weird little gadgets).
              </p>
            </div>
          </div>

          <div className="h-0 border-b-2 border-gray-400"></div>
          <div className="mt-8">
            <div className="dark:text-white text-center">
              <h2 className="text-xl">Contact</h2>
              <div>
                If you need to contact me,{" "}
                <a
                  className="text-blue-600 dark:text-purple-400"
                  href="/links/"
                >
                  here's where you can do that
                </a>
                .
              </div>
            </div>

            <div className="mt-4 text-center">
              <p className="dark:text-white">
                Credit to{" "}
                <a
                  className="text-blue-600 dark:text-purple-400"
                  href="https://github.com/Matthbo"
                >
                  Vivy
                </a>{" "}
                for parts of the design of this site.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
