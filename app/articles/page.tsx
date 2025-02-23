import AllArticlePage from "@/components/articles/all-article-page";
import ArticleSearchInput from "@/components/articles/article-search-input";
import { Button } from "@/components/ui/button";
import React, { Suspense } from "react";
import LoadingArticle from "./[id]/loading";
import { fetchArticleByQuery } from "@/lib/query/fetch-articlequery";
import Link from "next/link";

type SearchPageProps = {
  searchParams: Promise<{ search?: string; page?: string }>;
};

const ITEM_PER_PAGE = 3;

const page: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const searchText = (await searchParams).search || "";
  const currentPage = Number((await searchParams).page) || 1;

  const skip = (currentPage - 1) * ITEM_PER_PAGE;
  const take = ITEM_PER_PAGE;
  const { articles, total } = await fetchArticleByQuery(searchText, skip, take);
  const totalPages = Math.ceil(total / ITEM_PER_PAGE);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12 sm:px-6 lg:text-5xl">
        {/* Page Header */}

        <div className="mb-12 space-y-6 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">All Articles</h1>
          {/* Search Bar */}

          <ArticleSearchInput />
        </div>

        {/* All Article Page */}
        <Suspense
          fallback={
            <h1>
              <LoadingArticle />
            </h1>
          }
        >
          <AllArticlePage articles={articles} />
        </Suspense>

        {/* pagination */}

        <div className="mt-12 flex justify-center gap-2">
          <Link href={`?search=${searchText}$page=${currentPage - 1}`} passHref>
            <Button disabled={currentPage === 1} variant={"ghost"} size={"sm"}>
              ← Prev
            </Button>
          </Link>
          {Array.from({ length: totalPages }).map((_, index) => (
            <Link
              key={index}
              href={`?search=${searchText}$page=${index + 1}`}
              passHref
            >
              <Button
                variant={`${
                  currentPage === index + 1 ? "destructive" : "ghost"
                }`}
                size="sm"
              >
                {index + 1}
              </Button>
            </Link>
          ))}

          <Link href={`?search=${searchText}$page=${currentPage + 1}`} passHref>
            <Button
              disabled={currentPage === totalPages}
              variant={"ghost"}
              size={"sm"}
            >
              Next →
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default page;
