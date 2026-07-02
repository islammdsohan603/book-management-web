

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getData = async () => {
  const res = await fetch(`${baseUrl}/api/all-books`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};