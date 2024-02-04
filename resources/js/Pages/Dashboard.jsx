import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import Card from "@/Components/Card";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <h2 className="text-2xl ml-12 mt-10 font-bold">
                            2024年度
                        </h2>
                        <div className="flex flex-wrap justify-center mt-10">
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
                                            Feature 2
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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
                                            Feature 2
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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
                                            Feature 2
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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
                                            Feature 2
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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
                                            Feature 2
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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
                                            Feature 2
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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
                                            Feature 2
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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
                                            Feature 2
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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

                            <div className="p-4 max-w-sm">
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
                                            Feature 3
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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

                            <div className="p-4 max-w-sm">
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
                                            Feature 3
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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
                            <div className="p-4 max-w-sm">
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
                                            Feature 3
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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
                            <div className="p-4 max-w-sm">
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
                                            Feature 3
                                        </h2>
                                    </div>
                                    <div className="flex flex-col justify-between flex-grow">
                                        <p className="leading-relaxed text-base text-white dark:text-gray-300">
                                            Lorem ipsum dolor sit amet. In quos laboriosam non neque
                                            eveniet 33 nihil molestias. Rem perspiciatis iure ut
                                            laborum inventore et maxime amet.
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
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
