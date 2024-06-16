import { getBookmarksMock } from "@/tests/mocks/bookmarks";
import { renderWithClient } from "@/tests/utils";
import { fireEvent, screen, within } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import Page from "./page";
import { wait } from "@testing-library/user-event/dist/cjs/utils/index.js";

vi.mock("@/app/utils/bookmarkUtil", () => {
  return {
    getBookMarksList: () => getBookmarksMock(),
  };
});

const allElements = getBookmarksMock();

it("renders the grid", async () => {
  const container = renderWithClient(<Page />);

  const grid = container.getAllByTestId("artwork");

  expect(grid.length).toBe(allElements.length);

  await container.findByText(allElements[0].title);
});

it("searches", async () => {
  const container = renderWithClient(<Page />);

  const allArtwork = container.getAllByTestId("artwork");

  //   assertion based on mock

  expect(allArtwork.length).toBe(2);

  const input = container.getByPlaceholderText(/Search/i);

  //   we know from mocks, only one has a title of 'el titulo'. So we should only have one element after
  await userEvent.type(input, allElements[1].title.slice(0, 5));

  const artwork = container.getAllByTestId("artwork");

  expect(artwork.length).toBe(1);

  const [singleArt] = artwork;

  const theOne = within(singleArt).getByText(allElements[1].title);

  const justByTitle = container.getByText(/el titulo/i);

  expect(theOne).toEqual(justByTitle);
});

it("filter by public domain", async () => {
  const container = renderWithClient(<Page />);

  const allArtwork = container.getAllByTestId("artwork");

  expect(allArtwork.length).toBe(2);

  const publicDomainCheck = container.getByTestId("public-domain");

  await userEvent.click(publicDomainCheck);

  const artwork = container.getAllByTestId("artwork");

  expect(artwork.length).toBe(1);

  const [singleArt] = artwork;

  const theOne = within(singleArt).getByText(allElements[1].title);

  const justByTitle = container.getByText(/el titulo/i);

  expect(theOne).toEqual(justByTitle);
});

it("filter by public domain", async () => {
  const container = renderWithClient(<Page />);

  const allArtwork = container.getAllByTestId("artwork");

  expect(allArtwork.length).toBe(2);

  const publicDomainCheck = container.getByTestId("public-domain");

  await userEvent.click(publicDomainCheck);

  const artwork = container.getAllByTestId("artwork");

  expect(artwork.length).toBe(1);

  const [singleArt] = artwork;

  const theOne = within(singleArt).getByText(allElements[1].title);

  const justByTitle = container.getByText(/el titulo/i);

  expect(theOne).toEqual(justByTitle);
});

it("filter by public domain", async () => {
  const container = renderWithClient(<Page />);

  const allArtwork = container.getAllByTestId("artwork");

  expect(allArtwork.length).toBe(2);

  const onViewCheck = container.getByTestId("on-view");

  await userEvent.click(onViewCheck);

  const artwork = container.getAllByTestId("artwork");

  expect(artwork.length).toBe(1);

  const [singleArt] = artwork;

  const theOne = within(singleArt).getByText(allElements[1].title);

  const justByTitle = container.getByText(/el titulo/i);

  expect(theOne).toEqual(justByTitle);
});
