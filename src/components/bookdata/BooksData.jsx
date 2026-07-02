import { getData } from '@/db/data';
import React from 'react';

const BooksData = async () => {
  const books = await getData();
  console.log(books);
  return (
    <div>
      <h1>Books Data</h1>
    </div>
  );
};

export default BooksData;
