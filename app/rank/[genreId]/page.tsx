import Image from "next/image";
import { modifiedUrl } from "@/utils/modifiedUrl";

async function getData(genreId: number) {
  const res = await fetch(
    `${process.env.RANKING_API_URL}&genreId=${genreId}&applicationId=${process.env.APPLICATION_ID}&affiliateId=${process.env.AFFILIATE_ID}`
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
  const items: Item[] = data.Items;
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ランク</th>
            <th>商品コード</th>
            <th>商品名</th>
            <th>価格</th>
            <th>画像</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item: Item) => (
            <tr key={item.itemCode}>
              <td>{item.rank}</td>
              <td>{item.itemCode}</td>
              <td>{item.itemName}</td>
              <td>{item.itemPrice}</td>
              <td>
                <Image
                  src={modifiedUrl(item.mediumImageUrls[0])}
                  width={300}
                  height={300}
                  alt="Product image"
                />
              </td>
              <td>{item.affiliateUrl}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
