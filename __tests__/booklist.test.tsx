import React from "react";
import { shallow } from "enzyme";
import BookList from "../components/BookList";

describe("BookList", () => {
  it("子コンポーネントが生成されているか", () => {
    const books = [
      { title: "A" },
      { title: "B" },
      { title: "C" },
      { title: "D" },
      { title: "E" },
    ];

    const bookListWrapper = shallow(<BookList books={books} />);
    const bookListItems = bookListWrapper.find(".book");
    expect(bookListItems).toHaveLength(5);
  });

  it("books の要素がない時（検索結果が０件）", () => {
    const bookListWrapper = shallow(<BookList books={[]} />);
    // books の要素がある場合にレンダリングされる要素
    const bookListItems = bookListWrapper.find(".book");

    const noResult = bookListWrapper.find('.no-result');

    expect([
        bookListItems.exists(),
        noResult.exists()
    ]).toEqual([
        false,
        true
    ])    
  });

  it("books の要素がない時の画面表示", () => {
    const bookListWrapper = shallow(<BookList books={[]} />);
    const noResult = bookListWrapper.find('.no-result');

    expect(noResult.text()).toEqual("検索結果にヒットする書籍は見つかりませんでした")
  })
});
