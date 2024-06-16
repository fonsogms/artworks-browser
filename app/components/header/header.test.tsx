import { URLS } from "@/app/constants/URLS";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
const goToBookmarks = "Go to Bookmarks";

describe("Header Testing", () => {
  it("Filters exists", () => {
    render(
      <Header
        isOnView
        isPublicDomain
        search="cats"
        setIsOnView={vi.fn}
        setIsPublicDomain={vi.fn}
        setSearch={vi.fn}
        goToPageHref={URLS.SCREENS.ARTWORKS}
        goToPageTitle={goToBookmarks}
      />
    );

    const input = screen.queryByPlaceholderText(/search/gi);
    const input2 = screen.getByTestId("on-view");
    const input3 = screen.getByTestId("public-domain");
    const button = screen.getByTestId("go-to-page");

    expect(input).toBeInTheDocument();
    expect(input2).toBeInTheDocument();
    expect(input3).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
