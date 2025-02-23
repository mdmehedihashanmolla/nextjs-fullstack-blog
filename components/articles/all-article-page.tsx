import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Search } from "lucide-react";
import type { Prisma } from "@prisma/client";

type AllArticlePageProps = {
  articles: Prisma.ArticlesGetPayload<{
    include: {
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>[];
};

const AllArticlePage: React.FC<AllArticlePageProps> = async ({ articles }) => {
  if (!articles.length) {
    return <NoSearchResults />;
  }
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-center text-4xl font-bold text-gray-900 dark:text-white">
        All Articles
      </h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card
            key={article.id}
            className="group relative overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
          >
            {/* Image Container */}
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={article.featuredImage}
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
                {article.category}
              </span>

              {/* Title */}
              <h3 className="mb-2 text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {article.title}
              </h3>

              {/* Author Info */}
              <div className="mt-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="h-9 w-9 border-2 border-white dark:border-gray-800">
                    <AvatarImage src={article.author.imageUrl || ""} />
                    <AvatarFallback>MD</AvatarFallback>
                  </Avatar>
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-200">
                    {article.author.name}
                  </span>
                </div>

                {/* Date */}
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {article.createdAt.toDateString()}
                </div>
              </div>
            </div>
          </Card>
        ))}
        {/* Single Hardcoded Card */}
      </div>
    </div>
  );
};

export default AllArticlePage;

const NoSearchResults = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-4 rounded-full bg-muted p-4">
        <Search className="h-8 w-8" />
      </div>
      <h3 className="font-bold text-xl">No Result Found</h3>
      <p className="mt-2">No Matching Found ! Try Different Keywords</p>
    </div>
  );
};
