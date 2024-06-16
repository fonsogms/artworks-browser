import { server } from "@/tests/setup";
import { renderWithClient } from "@/tests/utils";
import { HttpResponse, http } from "msw";
import { URLS } from "./constants/URLS";
import Page from "./page";
import { regularResponse } from "@/tests/mocks/artworks";

vi.mock("next/navigation", () => ({
  usePathname: vi.fn(),
  useRouter: vi.fn().mockImplementation(() => ({ replace: vi.fn() })),
  useSearchParams: vi.fn().mockImplementation(() => new URLSearchParams()),
}));

it("stays in loading", async () => {
  const container = renderWithClient(<Page />);

  expect(await container.findByTestId("loading"));
});

it("displays error when api errors", async () => {
  const fakeErrorMessage = { message: "Too many requests" };
  server.use(
    http.get(URLS.API.CHICAGO_API.ROOT + URLS.API.CHICAGO_API.SEARCH, () => {
      return HttpResponse.json(fakeErrorMessage, { status: 429 });
    })
  );

  const container = renderWithClient(<Page />);

  expect(await container.findByTestId("error-api")).toBeInTheDocument();

  expect(
    await container.findByText(fakeErrorMessage.message)
  ).toBeInTheDocument();
});

it("displays a grid", async () => {
  server.use(
    http.get(URLS.API.CHICAGO_API.ROOT + URLS.API.CHICAGO_API.SEARCH, () =>
      HttpResponse.json(regularResponse)
    )
  );

  const container = renderWithClient(<Page />);

  await container.findByTestId("art-grid");

  const allTitles = regularResponse.data.map((e) => e.title);

  for (const title of allTitles) {
    container.getByText(title);
  }
});

function wait(time = 3000) {
  return new Promise<void>((r) => setTimeout(r, time));
}
