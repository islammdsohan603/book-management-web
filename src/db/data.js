

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getData = async () => {
  const res = await fetch(`${baseUrl}/api/recent-books`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};


export const getAllBooks = async () => {
  try {
    const res = await fetch(`${baseUrl}/api/all-books`, {
      cache: 'no-store',
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json();
  } catch (err) {
    console.error("Error fetching books", err);
    throw err;
  }
  return res.json();
}