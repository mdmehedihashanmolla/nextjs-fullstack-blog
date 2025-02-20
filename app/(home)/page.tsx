import { BlogFooter } from "@/components/home/blog-footer";
import Navbar from "@/components/home/header/navbar";
import Hero from "@/components/home/hero";
import TopArticles from "@/components/home/top-articles";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Suspense } from "react";

// Skeleton Loader for TopArticles
const TopArticlesSkeleton = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="relative overflow-hidden rounded-lg border border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900"
        >
          {/* Image Skeleton */}
          <div className="aspect-[5/3] w-full animate-pulse bg-gray-200 dark:bg-gray-800" />

          <div className="p-6">
            {/* Category Skeleton */}
            <div className="mb-4 h-6 w-24 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />

            {/* Title Skeleton */}
            <div className="mb-2 h-8 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />

            {/* Author Info Skeleton */}
            <div className="mt-4 flex items-center gap-3">
              <div className="h-9 w-9 animate-pulse rounded-full bg-gray-200 dark:bg-gray-800" />
              <div className="flex-1">
                <div className="h-4 w-24 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
                <div className="mt-2 h-4 w-32 animate-pulse rounded-lg bg-gray-200 dark:bg-gray-800" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="relative py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Featured Articles
            </h2>
            <p>Discover our most popular and trending content</p>
          </div>
          {/* Use the Skeleton Loader as the fallback */}
          <Suspense fallback={<TopArticlesSkeleton />}>
            <TopArticles />
          </Suspense>
          <div className="mt-12 text-center">
            <Link href={"/articles"}>
              <Button className="rounded-full hover:bg-gray-900 hover:text-white dark:bg-white dark:hover:text-gray-900">
                View all articles
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <BlogFooter />
    </div>
  );
}
