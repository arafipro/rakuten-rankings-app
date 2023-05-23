import Image from "next/image";
import Link from "next/link";
import { modifiedUrl } from "@/utils/urlUtils";
import { toLocaleString } from "@/utils/stringUtils";

async function getData(genreId: number) {
  const res = await fetch(
    `${process.env.RANKING_API_URL}&genreId=${genreId}&applicationId=${process.env.APPLICATION_ID}&affiliateId=${process.env.AFFILIATE_ID}`
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home({ params }: { params: { id: number } }) {
  const data = await getData(params.id);
  const items: Item[] = data.Items;
  return (
    <>
      <div className="grid grid-cols-3 justify-items-center">
        {items.map((item: Item) => (
          <Link
            key={item.itemCode}
            href={item.affiliateUrl}
            className="m-2 flex flex-col bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-2xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
          >
            <Image
              className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
              src={modifiedUrl(item.mediumImageUrls[0])}
              alt=""
              width={400}
              height={400}
            />
            <div className="py-4 flex flex-col justify-between px-4 leading-normal">
              <h5 className="text-lg leading-snug mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                {item.itemName}
              </h5>
              <div className="flex justify-between mx-8">
                <div className="flex items-center">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Rating star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <p className="ml-2 font-bold text-gray-900 dark:text-white">
                    {item.reviewAverage}
                  </p>
                  <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
                  <p className="font-medium text-gray-900 underline dark:text-white">
                    {item.reviewCount}件
                  </p>
                </div>
                <p className="text-xl font-normal text-red-600 dark:text-gray-400">
                  価格{toLocaleString(item.itemPrice)}円
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
