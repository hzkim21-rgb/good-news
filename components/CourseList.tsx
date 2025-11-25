"use client";

import { useState } from "react";
import { course7days } from "@/lib/sampleContent";
import BookmarkButton from "./BookmarkButton";

export default function CourseList() {
  const [openDay, setOpenDay] = useState<number | null>(1);

  return (
    <div className="space-y-3">
      {course7days.map(d => {
        const isOpen = openDay === d.day;
        const id = `course-day-${d.day}`;
        return (
          <div key={d.day} className="bg-white rounded-2xl shadow-sm p-4">
            <button
              type="button"
              onClick={() => setOpenDay(isOpen ? null : d.day)}
              className="w-full flex items-center justify-between"
            >
              <div className="text-left">
                <div className="text-xs text-gray-500">DAY {d.day}</div>
                <div className="text-base font-semibold">{d.title}</div>
              </div>
              <div className="text-gray-400 text-xs">{isOpen ? "▲" : "▼"}</div>
            </button>

            {isOpen && (
              <div className="mt-4 space-y-3">
                <p className="text-gray-800 leading-relaxed">{d.body}</p>
                {d.verse && <div className="text-sm text-gray-500">📖 {d.verse}</div>}
                <div className="bg-brand-100 rounded-xl p-3 text-sm text-gray-700">
                  🤍 오늘의 질문: {d.question}
                </div>
                <BookmarkButton id={id} />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
