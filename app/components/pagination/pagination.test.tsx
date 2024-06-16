import { renderWithClient } from "@/tests/utils";
import Pagination from "./pagination";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

it("Pagination exist", async () => {
  const setPage = vi.fn();
  const container = renderWithClient(
    <Pagination totalPages={10} currentPage={8} setCurrentPage={setPage} />
  );

  const prevButton = await container.findByTestId("prev-button");
  const nextButton = await container.findByTestId("next-button");

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
});

it("Next button is disabled in last page", async () => {
  const setPage = vi.fn();
  const container = renderWithClient(
    <Pagination totalPages={10} currentPage={10} setCurrentPage={setPage} />
  );

  const prevButton = await container.findByTestId("prev-button");
  const nextButton = await container.findByTestId("next-button");

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
  expect(nextButton).toBeDisabled();
});

it("Prev button is disabled in first page", async () => {
  const setPage = vi.fn();
  const container = renderWithClient(
    <Pagination totalPages={10} currentPage={1} setCurrentPage={setPage} />
  );

  const prevButton = await container.findByTestId("prev-button");
  const nextButton = await container.findByTestId("next-button");

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
  expect(prevButton).toBeDisabled();
});

it("Prev button is disabled in first page", async () => {
  const setPage = vi.fn();
  const container = renderWithClient(
    <Pagination totalPages={10} currentPage={1} setCurrentPage={setPage} />
  );

  const prevButton = await container.findByTestId("prev-button");
  const nextButton = await container.findByTestId("next-button");

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();
  expect(prevButton).toBeDisabled();
});

it("Next button goes to next page", async () => {
  const setPage = vi.fn();
  const container = renderWithClient(
    <Pagination totalPages={10} currentPage={1} setCurrentPage={setPage} />
  );

  const prevButton = await container.findByTestId("prev-button");
  const nextButton = await container.findByTestId("next-button");

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();

  await userEvent.click(nextButton);
  expect(setPage).toHaveBeenCalledWith(2);
});

it("Prev button goes to previous page", async () => {
  const setPage = vi.fn();
  const container = renderWithClient(
    <Pagination totalPages={10} currentPage={2} setCurrentPage={setPage} />
  );

  const prevButton = await container.findByTestId("prev-button");
  const nextButton = await container.findByTestId("next-button");

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();

  await userEvent.click(prevButton);
  expect(setPage).toHaveBeenCalledWith(1);
});

it("Prev button goes to previous page", async () => {
  const setPage = vi.fn();
  const container = renderWithClient(
    <Pagination totalPages={10} currentPage={2} setCurrentPage={setPage} />
  );

  const prevButton = await container.findByTestId("prev-button");
  const nextButton = await container.findByTestId("next-button");

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();

  await userEvent.click(prevButton);
  expect(setPage).toHaveBeenCalledWith(1);
});

it("shows current active page", async () => {
  const setPage = vi.fn();
  const container = renderWithClient(
    <Pagination totalPages={10} currentPage={2} setCurrentPage={setPage} />
  );

  const prevButton = await container.findByTestId("prev-button");
  const nextButton = await container.findByTestId("next-button");

  expect(prevButton).toBeInTheDocument();
  expect(nextButton).toBeInTheDocument();

  const activeButton = await container.findByTestId("page-number-2");

  expect(activeButton).toHaveClass("active");
});
