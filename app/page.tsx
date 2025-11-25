import MessageCard from "@/components/MessageCard";
import { dailyMessages } from "@/lib/sampleContent";

export default function HomePage() {
  const today = dailyMessages[0];

  return (
    <div className="space-y-5">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold">기쁜 소식</h1>
        <p className="text-sm text-gray-600">
          30초면 충분해요. 오늘, 마음에 한 줄만 남겨보세요.
        </p>
      </header>

      <section className="space-y-3">
        <div className="text-sm font-semibold text-gray-700">오늘의 메시지</div>
        <MessageCard {...today} />
      </section>

      <section className="bg-white rounded-2xl p-5 shadow-sm space-y-2">
        <div className="text-sm font-semibold">7일 탐색 코스</div>
        <p className="text-sm text-gray-700 leading-relaxed">
          예수님을 처음 알아가는 분들을 위한 아주 짧고 부드러운 여정입니다.
          부담 없이 하루 하나씩만 읽어보세요.
        </p>
        <a href="/course" className="inline-block text-brand-500 text-sm font-semibold">
          코스 시작하기 →
        </a>
      </section>
    </div>
  );
}
