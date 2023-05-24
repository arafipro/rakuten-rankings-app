import Link from "next/link";

async function getData() {
  const res = await fetch(
    "http://localhost:3000/api/genre"
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  const ichibaGenre: Genre[] = data.children;
  return (
    <div className="flex justify-center">
      <table className="text-gray-500 dark:text-gray-400 w-3/4">
        <thead className="text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center">
          <tr>
            <th scope="col" className="px-6 py-3">
              ジャンル名
            </th>
            <th scope="col" className="px-6 py-3">
              ジャンルID
            </th>
            <th scope="col" className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {ichibaGenre.map((child: Genre) => (
            <tr
              key={child.genreId}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-gray-600 text-center"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
              >
                {child.genreName}
              </th>
              <td className="px-6 py-4">{child.genreLevel}</td>
              <td className="text-center">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Link href={`genre/${child.genreId}`}>下層ジャンルへ</Link>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="ml-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <Link href={`rank/${child.genreId}`}>ランキングへ</Link>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
