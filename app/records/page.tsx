"use client";

import { useEffect, useState } from "react";
import { dailyMessages, course7days } from "@/lib/sampleContent";
import { getBookmarks } from "@/lib/storage";
import MessageCard from "@/components/MessageCard";

export default function RecordsPage() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    setIds(getBookmarks());
  }, []);

  const bookmarkedDaily = dailyMessages.filter(m => ids.includes(m.id));
  const bookmarkedCourse = course7days.filter(d => ids.includes(`course-day-${d.day}`));

  return (
    <div className="space-y-5">
      <header>
        <h1 className="text-xl font-bold">내 기록</h1>
        <p className="text-sm text-gray-600 mt-1">
          마음에 남은 내용만 조용히 모아둘 수 있어요.
        </p>
      </header>

      <section className="space-y-3">
        <div className="text-sm font-semibold text-gray-700">오늘의 메시지 북마크</div>
        {bookmarkedDaily.length === 0 && (
          <div className="text-sm text-gray-500">아직 북마크한 메시지가 없어요.</div>
        )}
        {bookmarkedDaily.map(m => (
          <MessageCard key={m.id} {...m} />
        ))}
      </section>

      <section className="space-y-3">
        <div className="text-sm font-semibold text-gray-700">코스 북마크</div>
        {bookmarkedCourse.length === 0 && (
          <div className="text-sm text-gray-500">아직 북마크한 코스가 없어요.</div>
        )}
        {bookmarkedCourse.map(d => (
          <div key={d.day} className="bg-white rounded-2xl shadow-sm p-5 space-y-2">
            <div className="text-xs text-gray-500">DAY {d.day}</div>
            <div className="text-base font-semibold">{d.title}</div>
            <p className="text-gray-800 leading-relaxed">{d.body}</p>
            {d.verse && <div className="text-sm text-gray-500">📖 {d.verse}</div>}
          </div>
        ))}
      </section>
    </div>
  );
}

