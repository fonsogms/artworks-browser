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
