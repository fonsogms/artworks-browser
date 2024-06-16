import { URLS } from "@/app/constants/URLS";
import { IGetArtworksResponse } from "@/app/services/api/chicago/getArtworks";
import { http, HttpResponse } from "msw";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get(URLS.API.CHICAGO_API.ROOT + "/search", (...args) => {
    const response: Pick<IGetArtworksResponse, "data" | "pagination"> = {
      data: [],
      pagination: {
        current_page: 1,
        limit: 1,
        offset: 1,
        total: 1,
        total_pages: 1,
        next_url: "",
      },
    };
    return HttpResponse.json(response);
  }),
  http.get(
    "https://www.artic.edu/iiif/2/:id/full/:width,/0/default.jpg",
    () => {
      return HttpResponse.json({});
    }
  ),
  http.get(URLS.API.CHICAGO_API.ROOT + "/:id", () => {
    const response = {
      data: {
        id: 192413,
        title: "Jonsberg Vase",
        description:
          "<p>Hella Jongerius’s Jonsberg Vase for IKEA is a perfect example of the fusion of nostalgia and the avant-garde through the use of embroidery in contemporary design. The vase itself has a clean-lined, classic shape that would be fitting in a minimalist modern setting without any embellishment. Jongerius, however, is known for reinterpreting normative conventions of craft to produce new hybrids that are imbued with warmth, nostalgia, and fun. Here her figurative floral pattern is pierced into the vase in a manner reminiscent of needlepoint. The merging of these two apparently incongruent traditions renders the vase—because of the ornamental perforations—anything but functional.</p>\n",
        short_description: null,
        is_public_domain: false,
        is_on_view: false,
        artist_title: "Hella Jongerius",
        image_id: "46b6744e-144e-c575-5d91-3a1faf489e6e",
      },
      info: {
        license_text:
          "The `description` field in this response is licensed under a Creative Commons Attribution 4.0 Generic License (CC-By) and the Terms and Conditions of artic.edu. All other data in this response is licensed under a Creative Commons Zero (CC0) 1.0 designation and the Terms and Conditions of artic.edu.",
        license_links: [
          "https://creativecommons.org/publicdomain/zero/1.0/",
          "https://www.artic.edu/terms",
        ],
        version: "1.10",
      },
      config: {
        iiif_url: "https://www.artic.edu/iiif/2",
        website_url: "http://www.artic.edu",
      },
    };
    return HttpResponse.json(response);
  }),
];
