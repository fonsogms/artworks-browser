import { IArtWorkDetails } from "@/app/services/api/chicago/getArtworkDetails";

export const getBookmarksMock = (): Array<IArtWorkDetails> => [
  {
    artist_title: "Artist Title",
    description: "Description",
    id: 1,
    image_id: "123",
    is_on_view: false,
    is_public_domain: false,
    short_description: "Short Description",
    title: "Title",
  },
  {
    artist_title: "Artista Titulo",
    description: "EsDescripciooon",
    id: 2,
    image_id: "uno dos tres",
    is_on_view: true,
    is_public_domain: true,
    short_description: "eshort esdescripciooon",
    title: "el titulo",
  },
];
