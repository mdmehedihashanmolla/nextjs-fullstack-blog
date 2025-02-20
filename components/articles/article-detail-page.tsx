import { Prisma } from "@prisma/client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import LikeButton from "./like-button";
import CommentList from "../comments/comment-list";

type ArticleDetailPageProps = {
  article: Prisma.ArticlesGetPayload<{
    include: {
      author: {
        select: {
          name: true;
          email: true;
          imageUrl: true;
        };
      };
    };
  }>;
};

const ArticleDetailPage: React.FC<ArticleDetailPageProps> = ({ article }) => {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl">
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 text-sm text-primary">
                Web-Development
              </span>
            </div>

            <h1 className="text-4xl font-bold mb-4">
              How to Learn Blockchain in 2025
            </h1>

            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src={article.author.imageUrl || undefined} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{article.author.name}</p>
                <p className="text-sm">
                  {article.createdAt.toDateString()}12 min read
                </p>
              </div>
            </div>
          </header>
          <section
            className="prose prose-lg dark:prose-invert max-w-none mb-12"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Article Action Button */}

          <LikeButton/>

          {/* Comment Section */}

        <CommentList/>
        </article>
      </main>
    </div>
  );
};

export default ArticleDetailPage;
