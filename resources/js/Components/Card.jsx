import { Link } from "@inertiajs/react";

export default function Card({ href = "", ...props }) {
    return (
        <Link href={href} {...props}>
            <div className="h-64 w-72 cursor-pointer hover:scale-105 transition p-4 max-w-sm">
                <div className="flex rounded-lg dark:bg-gray-800 bg-teal-400 p-8 flex-col">
                    <div className="flex items-center mb-3">
                        <h2 className="text-white dark:text-white text-lg font-medium">
                            Feature 1
                        </h2>
                    </div>
                </div>
            </div>
        </Link>
    );
}
