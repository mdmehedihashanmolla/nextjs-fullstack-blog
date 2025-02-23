import AllArticlePage from "@/components/articles/all-article-page";
import ArticleSearchInput from "@/components/articles/article-search-input";
import { Button } from "@/components/ui/button";
import React, { Suspense } from "react";
import LoadingArticle from "./[id]/loading";

type SearchPageProps = {
  searchParams: Promise<{ search?: string }>;
};

const page: React.FC<SearchPageProps> = async ({ searchParams }) => {
  const searchText = (await searchParams).search || "";
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
        <Suspense fallback={<h1><LoadingArticle/></h1>}>
          <AllArticlePage searchText={searchText} />
        </Suspense>

        {/* pagination */}

        <div className="mt-12 flex justify-center gap-2">
          <Button variant={"ghost"} size={"sm"}>
            ← Prev
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            1
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            2
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            3
          </Button>
          <Button variant={"ghost"} size={"sm"}>
            Next →
          </Button>
        </div>
      </main>
    </div>
  );
};

export default page;
