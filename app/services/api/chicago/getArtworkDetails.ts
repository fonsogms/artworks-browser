import { chicagoApi } from "./chicagoApi";
import { IChicagoApiResponse, IChicagoArtwork } from "./types";

export type IArtWorkDetails = Pick<
  IChicagoArtwork,
  | "id"
  | "title"
  | "description"
  | "short_description"
  | "image_id"
  | "artist_title"
  | "is_on_view"
  | "is_public_domain"
>;
type IGetArtworkDetailsResponse = IChicagoApiResponse<IArtWorkDetails>;

/**
 * Fetches detailed information about a specific artwork by its ID.
 *
 * @param {string} id - The ID of the artwork to fetch details for. This ID is unique to the Chicago Art Institute API under "id".
 * @returns {Promise<IArtWorkDetails>} A promise that resolves to the detailed information of the artwork.
 *
 * @example
 * // Example usage:
 * getArtworkDetails("12345").then(artworkDetails => {
 *   console.log(artworkDetails);
 * });
 */
export const getArtworkDetails = async (id: string) => {
  //TODO dynamic typing for fields in api response
  const queryFields = new URLSearchParams({
    fields:
      "id,title,description,short_description,image_id,artist_title,is_on_view,is_public_domain",
  });

  const { data } = await chicagoApi.get<IGetArtworkDetailsResponse>(
    `/${id}?${queryFields.toString()}`
  );
  return data.data;
};
