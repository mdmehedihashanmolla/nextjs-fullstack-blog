import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const TopArticles = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <Card
          className={cn(
            "relative overflow-hidden transition-transform duration-300 ease-out",
            "border border-gray-100 dark:border-gray-800",
            "bg-white dark:bg-gray-900",
            "hover:shadow-lg dark:hover:shadow-gray-800/30",
            "group h-full" // Ensure cards have equal height
          )}
        >
          <Link href={`/articles/${1234}`} className="block h-full">
            <div className="flex h-full flex-col">
              {/* Image Container with Hover Effect */}
              <div className="relative aspect-[5/3] overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg"
                  alt="Blockchain development"
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                {/* Category Badge */}
                <span className="mb-4 inline-block self-start rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
                  Blockchain
                </span>

                {/* Article Title */}
                <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors dark:text-white lg:text-2xl lg:leading-tight">
                  How to Become a Blockchain Developer: A Comprehensive Guide
                </h3>

                {/* Author Info */}
                <div className="mt-auto flex items-center gap-3 pt-4">
                  <Avatar className="h-9 w-9 border-2 border-white dark:border-gray-800">
                    <AvatarImage src="/avatar-placeholder.jpg" />
                    <AvatarFallback className="bg-blue-100 dark:bg-blue-900">
                      MH
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      MD Mehedi Hashan Molla
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <time className="block">12 Feb 2024</time>
                      <span className="text-gray-300 dark:text-gray-600">
                        •
                      </span>
                      <span>{12} min read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default TopArticles;
