import "./globals.css";
import AppBar from "@/components/AppBar";
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
      <body className="font-sans antialiased text-gray-900 h-screen w-full flex flex-col text-center">
        <AppBar />
        <h1>Rakuten Rankings</h1>
        <div className="h-screen flex flex-col justify-between">
          {children}
          <Credit />
        </div>
      </body>
    </html>
  );
}
