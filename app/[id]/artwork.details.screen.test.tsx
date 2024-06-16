import { renderWithClient } from "@/tests/utils";
import Page from "./page";
import { HttpResponse, http } from "msw";
import { server } from "@/tests/setup";
import { URLS } from "@/app/constants/URLS";
import { response } from "@/tests/mocks/artworkDetails";
import userEvent from "@testing-library/user-event";
import { getBookMarksList } from "@/app/utils/bookmarkUtil";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
  useRouter: vi.fn().mockImplementation(() => ({ replace: vi.fn() })),
  useParams: vi.fn().mockImplementation(() => "12345"),
}));

it("stays in loading", async () => {
  const container = renderWithClient(<Page />);

  expect(await container.findByTestId("loading"));
});

it("displays error when api errors", async () => {
  const fakeErrorMessage = { message: "Artwork not found" };
  server.use(
    http.get(URLS.API.CHICAGO_API.ROOT + "/:id", () => {
      return HttpResponse.json(fakeErrorMessage, { status: 404 });
    })
  );

  const container = renderWithClient(<Page />);

  expect(await container.findByTestId("error-api")).toBeInTheDocument();

  expect(
    await container.findByText(fakeErrorMessage.message)
  ).toBeInTheDocument();
});

it("displays artwork details", async () => {
  server.use(
    http.get(URLS.API.CHICAGO_API.ROOT + "/:id", () => {
      console.log("response", response);
      return HttpResponse.json(response);
    })
  );

  const container = renderWithClient(<Page />);

  await container.findByTestId("loading");

  expect(await container.findByText(response.data.title));
});

it("toggles bookmark", async () => {
  const container = renderWithClient(<Page />);
  await container.findByTestId("loading");

  const button = await container.findByTestId("bookmark-button");

  expect(button).toBeInTheDocument();

  expect(button).toHaveTextContent("Bookmark");

  await userEvent.click(button);

  expect(button).toHaveTextContent("Bookmarked");

  let bookmarks = getBookMarksList();

  let isBookMarked = bookmarks?.length;

  expect(isBookMarked).toBeTruthy();

  await userEvent.click(button);

  bookmarks = getBookMarksList();

  isBookMarked = bookmarks?.length;

  expect(isBookMarked).toBeFalsy();

  expect(button).toHaveTextContent("Bookmark");
});
