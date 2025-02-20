import React from "react";
import { Card } from "../ui/card";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { prisma } from "@/lib/prisma";

const TopArticles = async () => {
  const articles = await prisma.articles.findMany({
    orderBy: {
      createdAt: "desc",
    },
    include: {
      comments: true,
      author: {
        select: {
          name: true,
          email: true,
          imageUrl: true,
        },
      },
    },
  });

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((article) => (
          <Card
            key={article.id}
            className={cn(
              "relative overflow-hidden transition-transform duration-300 ease-out",
              "border border-gray-100 dark:border-gray-800",
              "bg-white dark:bg-gray-900",
              "hover:shadow-2xl dark:hover:shadow-gray-800/50",
              "group h-full transform hover:-translate-y-2", // Lift card on hover
              "rounded-lg" // Rounded corners
            )}
          >
            <Link href={`/articles/${article.id}`} className="block h-full">
              <div className="flex h-full flex-col">
                {/* Image Container with Hover Effect */}
                <div className="relative aspect-[5/3] overflow-hidden rounded-t-lg">
                  <Image
                    src={article.featuredImage}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* Category Badge */}
                  <span className="mb-4 inline-block self-start rounded-full bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 transition-colors duration-300 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">
                    {article.category}
                  </span>

                  {/* Article Title */}
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors dark:text-white lg:text-2xl lg:leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400">
                    {article.title}
                  </h3>

                  {/* Author Info */}
                  <div className="mt-auto flex items-center gap-3 pt-4">
                    <Avatar className="h-9 w-9 border-2 border-white dark:border-gray-800 transition-transform duration-300 group-hover:scale-110">
                      <AvatarImage src={article.author.imageUrl as string} />
                      <AvatarFallback className="bg-blue-100 dark:bg-blue-900">
                        {article.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                        {article.author.name}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <time className="block">
                          {new Date(article.createdAt).toDateString()}
                        </time>
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
        ))}
      </div>
    </div>
  );
};

export default TopArticles;
