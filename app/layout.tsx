import type { Metadata } from "next";
import "./globals.css";
import { ServiceWorkerRegister } from "@/components/ServiceWorkerRegister";

export const metadata: Metadata = {
  title: "기쁜 소식",
  description: "예수님을 부드럽게 소개하는 7일 탐색 웹앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
        <meta name="theme-color" content="#020617" />
      </head>
      <body>
        <div className="app-root">
          <ServiceWorkerRegister />
          {children}
        </div>
      </body>
    </html>
  );
}

