"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function QuestionsPage() {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  async function submit() {
    if (!text.trim()) return;
    setLoading(true);
    try {
      await addDoc(collection(db, "questions"), {
        text: text.trim(),
        createdAt: serverTimestamp()
      });
      setText("");
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch (e) {
      console.error(e);
      alert("질문 저장 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-xl font-bold">익명 질문</h1>
        <p className="text-sm text-gray-600 mt-1">
          어떤 질문이든 괜찮습니다. 이름 없이 저장됩니다.
        </p>
      </header>

      <textarea
        className="w-full min-h-[140px] rounded-2xl border border-gray-200 p-4 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-brand-100"
        placeholder="예: 예수님을 믿는다는 건 정확히 어떤 뜻인가요?"
        value={text}
        onChange={e => setText(e.target.value)}
      />

      <button
        type="button"
        onClick={submit}
        disabled={loading}
        className="w-full rounded-2xl py-3 bg-brand-500 text-white font-semibold disabled:opacity-60"
      >
        {loading ? "저장 중..." : "질문 저장하기"}
      </button>

      {done && (
        <div className="text-center text-sm text-brand-500">
          질문이 안전하게 저장됐습니다. 감사합니다.
        </div>
      )}
    </div>
  );
}
