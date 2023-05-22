async function getData() {
  const res = await fetch(
    `${process.env.BASE_SERACH_URL}&genreId=0&applicationId=${process.env.APPLICATION_ID}`
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
    <>
      <table>
        <thead>
          <tr>
            <th>ジャンルID</th>
            <th>ジャンル階層</th>
            <th>ジャンル名</th>
          </tr>
        </thead>
        <tbody>
          {ichibaGenre.map((child: Genre) => (
            <tr key={child.genreId}>
              <td>{child.genreId}</td>
              <td>{child.genreLevel}</td>
              <td>{child.genreName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
