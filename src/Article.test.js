import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Article from "./Article";
import "@testing-library/jest-dom";

test("renders article details", () => {
  jest.spyOn(Storage.prototype, "getItem");
  Storage.prototype.getItem = jest.fn(() =>
    JSON.stringify([
      {
        title: "hello",
        abstract: "abstract",
        id: 1,
        byline: "byline",
      },
    ]),
  );
  render(
    <MemoryRouter initialEntries={["/article/1"]}>
      <Routes>
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </MemoryRouter>,
  );
  const articleTitle = screen.getByText("hello");
  expect(articleTitle).toBeInTheDocument();
  const articleAbstract = screen.getByText("abstract");
  expect(articleAbstract).toBeInTheDocument();
  const articleByline = screen.getByText("byline");
  expect(articleByline).toBeInTheDocument();
});
