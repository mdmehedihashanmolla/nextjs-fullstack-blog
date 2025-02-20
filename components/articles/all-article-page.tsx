import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const AllArticlePage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
        All Articles
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {/* Single Hardcoded Card */}
        <Card className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900">
          {/* Image Container */}
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src="https://images.pexels.com/photos/19112195/pexels-photo-19112195/free-photo-of-woman-grabbing-a-red-apple-from-a-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="blog image"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          {/* Article Content */}
          <div className="p-6">
            {/* Category Badge */}
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
              Web Development
            </span>

            {/* Title */}
            <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
              The Future of Web Development
            </h3>

            {/* Author Info */}
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar className="h-9 w-9 border-2 border-white dark:border-gray-800">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
                  MD Mehedi
                </span>
              </div>

              {/* Date */}
              <div className="text-sm text-gray-500 dark:text-gray-400">
                12 Feb 2024
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AllArticlePage;
