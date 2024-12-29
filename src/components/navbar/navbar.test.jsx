import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter

import NavBar from "./navbar"; // Adjust the import based on your folder structure
import "@testing-library/jest-dom"; // For the 'toBeInTheDocument' matcher
import userEvent from "@testing-library/user-event";

it("the NavBar container appears in the DOM", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const container = screen.getByTestId("container");
  expect(container).toBeInTheDocument();
});

it("the NavBar container has at least one class", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const container = screen.getByTestId("container");
  expect(container.classList.length).toBeGreaterThan(0);
});

it("clicking a link will change the state and add 'active' class", async () => {
  const user = userEvent.setup();
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const Store = screen.getByTestId("Store");
  const classListLength = Store.classList.length;
  await user.click(Store);
  expect(Store.classList.length).toBe(classListLength + 1);
});

it("dynamically created link list items are there", async () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const Store = screen.getByTestId("Store");
  const About = screen.getByTestId("About");
  expect(Store).toBeInTheDocument();
  expect(About).toBeInTheDocument();
});

it("initially 'Home' link is active", () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  const activeLinks = screen
    .queryAllByRole("link")
    .filter((link) => [...link.classList].some((cls) => /active/.test(cls)));
  expect(activeLinks.length).toBe(1);
  expect(activeLinks[0].classList.length).toBe(2);
});

// add a snapshot test
