import { getData } from "@/db/data";

export default async function Home() {
  const data = await getData();

  if (!data || data.length === 0) {
    return <div>No books found</div>;
  }

  return (
    <div>
      {data.map((book) => (
        <div key={book._id}>
          <h1>{book.name}</h1>
        </div>
      ))}
    </div>
  );
}