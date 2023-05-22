import Link from "next/link";

export default function AppBar() {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-white to-gray-200 shadow">
      <Link className="transition-colors hover:text-blue-500" href={"/genre"}>
        ジャンル
      </Link>
      <Link className="transition-colors hover:text-blue-500" href={"/rank/0"}>
        ランキング
      </Link>
    </header>
  );
}
