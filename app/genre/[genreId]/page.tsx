import Link from "next/link";
import { Router } from "next/router";

async function getData(genreId: number) {
  const res = await fetch(
    `${process.env.SERACH_API_URL}&genreId=${genreId}&applicationId=${process.env.APPLICATION_ID}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home({
  params,
}: {
  params: { genreId: number };
}) {
  const data = await getData(params.genreId);
  const ichibaGenre: Genre[] = data.children;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ジャンルID</th>
            <th>ランキング</th>
            <th>ジャンル階層</th>
            <th>ジャンル名</th>
          </tr>
        </thead>
        <tbody>
          {ichibaGenre.map((child: Genre) => (
            <tr key={child.genreId}>
              <td>
                <Link href={`genre/${child.genreId}`}>{child.genreId}</Link>
              </td>
              <td>
                <Link href={`rank/${child.genreId}`}>{child.genreId}</Link>
              </td>
              <td>{child.genreLevel}</td>
              <td>{child.genreName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
