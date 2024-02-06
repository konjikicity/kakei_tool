import { Link } from "@inertiajs/react";

export default function Card({ href = "register", month }) {
  return (
    <Link href={route(href)}>
      <div className="p-4 max-w-sm hover:scale-105 transition cursor-pointer">
        <div className="flex rounded-lg h-full dark:bg-gray-800 bg-teal-400 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-white dark:text-white text-lg font-medium">
              {month}月
            </h2>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <p className="leading-relaxed text-base text-white dark:text-gray-300">
              Lorem ipsum dolor sit amet. In quos laboriosam non neque eveniet
              33 nihil molestias. Rem perspiciatis iure ut laborum inventore et
              maxime amet.
            </p>
            <a
              href="#"
              className="mt-3 text-black dark:text-white hover:text-blue-600 inline-flex items-center"
            >
              Learn More
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Link>
  );
}
