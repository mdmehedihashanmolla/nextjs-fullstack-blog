import EditArticlePage from "@/components/articles/editarticlepage";
import { prisma } from "@/lib/prisma";
import React from "react";

type EditArticleParams = {
  params: { id: string };
};

const Page = async ({ params }: EditArticleParams) => {
  const article = await prisma.articles.findUnique({
    where: { id: params.id },
  });

  if (!article) {
    return <h1>Article Not Found. ID: {params.id}</h1>;
  }

  return <EditArticlePage article={article} />;
};

export default Page;
