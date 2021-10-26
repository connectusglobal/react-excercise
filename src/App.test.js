import React from "react";
import { render } from "@testing-library/react";
import App from "../src/App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Connectus Global 2021 Challenge!/i);
  expect(linkElement).toBeInTheDocument();
});
