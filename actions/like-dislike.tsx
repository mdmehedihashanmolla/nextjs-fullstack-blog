"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export const likeDislikeToggle = async (articleId: string) => {
  const { userId } = await auth();

  if (!userId) {
    throw new Error("Please Login to Like Article");
  }
  const user = await prisma.user.findUnique({
    where: { clerkUserId: userId },
  });
  if (!user) {
    throw new Error("User does not exist in the database");
  }

  const existingLike = await prisma.like.findFirst({
    where: { articleId, userId: user.id },
  });

  if (existingLike) {
    // For Dislike
    await prisma.like.delete({
      where: { id: existingLike.id },
    });
  } else {
    //Like
    await prisma.like.create({
      data: {
        articleId,
        userId: user.id,
      },
    });
  }
  revalidatePath(`/articles/${articleId}`);
};
