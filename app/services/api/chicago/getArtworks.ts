"use client";
import { AxiosInstance } from "axios";
import { chicagoApi } from "./chicagoApi";
import { IChicagoApiResponse, IChicagoArtwork } from "./types";
import { URLS } from "@/app/constants/URLS";

type IGetArtworksParams = {
  page: number;
  search: string;
  isPublicDomain: boolean;
  isOnView: boolean;
};

export type IArtWorks = Pick<
  IChicagoArtwork,
  "id" | "title" | "image_id" | "is_on_view"
>[];

export type IGetArtworksResponse = IChicagoApiResponse<IArtWorks>;

export function makeGetArtworks(chicagoApi: AxiosInstance) {
  return async ({
    page,
    search,
    isPublicDomain,
    isOnView,
  }: IGetArtworksParams) => {
    const query = new URLSearchParams({
      q: search,
      fields: "id,title,image_id,is_on_view",
      page: page.toString(),
      "query[bool][must][0][term][is_public_domain]": isPublicDomain.toString(),
      "query[bool][must][1][term][is_on_view]": isOnView.toString(),
    });

    const { data } = await chicagoApi.get<IGetArtworksResponse>(
      `${URLS.API.CHICAGO_API.SEARCH}?${query.toString()}`
    );

    return data;
  };
}
/**
 * Fetches a list of artworks based on specified parameters.
 *
 * @param {Object} params - The parameters for fetching artworks.
 * @param {number} params.page - The page number for pagination.
 * @param {string} params.search - The search query string.
 * @param {boolean} params.isPublicDomain - Filter for public domain artworks.
 * @param {boolean} params.isOnView - Filter for artworks currently on view.
 * @returns {Promise<IGetArtworksResponse>} A promise that resolves to the API response containing the list of artworks.
 */
export const getArtworks = makeGetArtworks(chicagoApi);
