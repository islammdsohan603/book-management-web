

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

// recent data
export const getData = async () => {
  const res = await fetch(`${baseUrl}/api/recent-books`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

// all data
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

}

// single data api

export const getSingleBooks = async (id) => {
  try {
    const res = await fetch(`${baseUrl}/api/details/${id}`, {
      cache: 'no-store'
    })

    if (!res.ok) {

      throw new Error('Failed to fetch book');
    }

    return await res.json();

  } catch (error) {
    console.log("book server error", error)
    return null
  }
}



// read book


export const getReadBooksBookMarks = async () => {
  try {

    const res = await fetch(`${baseUrl}/api/get-read-book`, { cache: 'no-store' })
    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.json()

  } catch (err) {
    console.error("Error fetching books", err);
  }
}

