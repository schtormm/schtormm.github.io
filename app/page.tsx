import Image from "next/image";
import Link from "next/link";
import profile from "../public/images/profile.jpeg";
export default function Home() {
  return (
    <main>
      <div>
        <div className="px-5 sm:px-0 flex flex-col justify-center h-screen bg-gray-50 dark:bg-gray-950">
          <div className="p-10 mx-auto bg-gray-200 dark:bg-gray-900 shadow-lg dark:shadow-purple-900/60 rounded-xl">
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
                  className="text-indigo-400"
                  href="https://www.rotterdamuas.com/about/organisation/schools/school-of-communication-media-and-information-technology/welcome/"
                >
                  Rotterdam University of Applied Sciences
                </a>
                .
                <p className="mt-2">
                  {" "}
                  I like simracing and tech (anything from open source software
                  to old consoles).
                </p>
              </div>
            </div>

            <div className="h-0 mx-auto border-b-2 border-gray-400"></div>
            <div className="mt-8">
              <div className="dark:text-white text-center">
                <h2 className="text-xl">Contact</h2>
                <div>
                  If you need to contact me,{" "}
                  <Link className="text-indigo-400" href="/links">
                    here's where you can do that
                  </Link>
                  .
                </div>
                <div>
                  Additionally:{" "}
                  <Link className="text-indigo-400" href={"/cv"}>
                    here's my experience and a few projects!
                  </Link>
                </div>
              </div>

              <div className="mt-4 text-center">
                <p className="dark:text-white">
                  Credit to{" "}
                  <a
                    className="text-purple-400"
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
    </main>
  );
}
