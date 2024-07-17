import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ArticleList from "./ArticleList";
import axios from "axios";
jest.mock("axios");
axios.get = jest.fn();
import "@testing-library/jest-dom";

test("renders Article list", async () => {
  // Mock the fetch function
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve([
          {
            id: 1,
            title: "a",
            published_date: "b",
          },
          {
            id: 2,
            title: "c",
            published_date: "d",
          },
        ]),
    }),
  );

  render(<ArticleList />);

  await waitFor(() => {
    const userList = screen.getByText(/new york/i);
    expect(userList).toBeInTheDocument();
  });
});
