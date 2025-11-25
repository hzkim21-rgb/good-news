"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "홈" },
  { href: "/course", label: "코스" },
  { href: "/questions", label: "질문" },
  { href: "/records", label: "내 기록" }
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 border-t border-gray-200 backdrop-blur">
      <div className="max-w-md mx-auto grid grid-cols-4 text-sm">
        {tabs.map(t => {
          const active = pathname === t.href;
          return (
            <Link
              key={t.href}
              href={t.href}
              className={`py-3 text-center ${active ? "text-brand-500 font-semibold" : "text-gray-500"}`}
            >
              {t.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
