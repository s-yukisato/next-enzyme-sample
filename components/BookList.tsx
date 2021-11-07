import React from "react";
import { prototype } from "@wojtekmaj/enzyme-adapter-react-17";

type Book = {
  title: string;
};

export type BookListProps = {
  books: Book[];
};

const BookList = ({ books = [] }: BookListProps) => {
  return (
    <div className="list-container">
      {books.length > 0 ?
        books.map((book) => (
          <div className="book" key={book.title}>
            {book.title}
          </div>
        )) : (
            <div className="no-result">検索結果にヒットする書籍は見つかりませんでした</div>
        )}
    </div>
  );
};

export default BookList;
