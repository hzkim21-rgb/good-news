"use client";

import { useEffect, useState } from "react";
import { getBookmarks, toggleBookmark } from "@/lib/storage";

export default function BookmarkButton({ id }: { id: string }) {
  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(getBookmarks().includes(id));
  }, [id]);

  return (
    <button
      onClick={() => {
        const next = toggleBookmark(id);
        setBookmarked(next.includes(id));
      }}
      className={`text-xs px-3 py-1 rounded-full border ${
        bookmarked ? "bg-brand-100 border-brand-500 text-brand-500" : "bg-white border-gray-300 text-gray-600"
      }`}
      aria-label="북마크"
    >
      {bookmarked ? "북마크됨" : "북마크"}
    </button>
  );
}
