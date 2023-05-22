import "./globals.css";
import Credit from "@/components/Credit";

export const metadata = {
  title: "Rakuten Rankings",
  description: "Rakuten Rankings App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="font-sans antialiased text-gray-900 h-screen w-full flex flex-col justify-between text-center">
        <h1>Rakuten Rankings</h1>
        {children}
        <Credit />
      </body>
    </html>
  );
}
