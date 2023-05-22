import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
