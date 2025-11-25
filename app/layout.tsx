import "./globals.css";
import BottomNav from "@/components/BottomNav";

export const metadata = {
  title: "기쁜 소식",
  description: "부담 없이 예수님을 알아가는 7일 여정"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <main className="max-w-md mx-auto px-4 pt-6 pb-24">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}
