"use client";
import React, { useOptimistic, useTransition } from "react";
import { Button } from "../ui/button";
import { Bookmark, Share2, ThumbsUp } from "lucide-react";
import { likeDislikeToggle } from "@/actions/like-dislike";
import { Like } from "@prisma/client";

type LikeButtonProps = {
  articleId: string;
  likes: Like[];
  isLiked: boolean;
};
const LikeButton: React.FC<LikeButtonProps> = ({
  articleId,
  likes,
  isLiked,
}) => {
  const [instantLike, setInstantLike] = useOptimistic(likes.length);
  const [isPending, startTransition] = useTransition();

  const handleLikeDislike = async () => {
    startTransition(async () => {
      setInstantLike(isLiked ? instantLike - 1 : instantLike + 1);
      await likeDislikeToggle(articleId);
    });
  };
  return (
    <div className="flex gap-4 mb-12 border-t pt-8">
      <form action={handleLikeDislike}>
        <Button
          disabled={isPending}
          type="submit"
          variant={"ghost"}
          className="gap-2"
        >
          <ThumbsUp className="h-5 w-5" />
          {instantLike}
        </Button>
      </form>

      <Button variant={"ghost"} className="gap-2">
        <Bookmark className="h-5 w-5" />
      </Button>
      <Button variant={"ghost"} className="gap-2">
        <Share2 className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default LikeButton;
