const regularPayload = [
  {
    _score: 5442.9014,
    is_on_view: false,
    id: 137125,
    image_id: "d94d0e3d-5d89-ce07-ee0f-7fa6d8def8ab",
    title: "Many Mansions",
  },
  {
    _score: 2177.1606,
    is_on_view: false,
    id: 229393,
    image_id: "7690dd6e-05ed-773c-a80e-e7cc4eb879cc",
    title: "Untitled",
  },
  {
    _score: 659.7456,
    is_on_view: false,
    id: 117266,
    image_id: "ec19d5f1-ae0f-5186-d421-4a53dca5fb90",
    title: "Nightlife",
  },
  {
    _score: 53.281757,
    is_on_view: false,
    id: 47149,
    image_id: "97cb5c4b-cce5-c4d8-f303-613ce92832c7",
    title: "Mao",
  },
  {
    _score: 52.891567,
    is_on_view: false,
    id: 151424,
    image_id: "be9551d4-860f-37a0-1408-086617f1824e",
    title: "Inventions of the Monsters",
  },
  {
    _score: 51.63267,
    is_on_view: false,
    id: 147003,
    image_id: "e7f4caac-6a16-e332-9a51-34f986d4b451",
    title: "Woman Descending the Staircase (Frau die Treppe herabgehend)",
  },
  {
    _score: 50.600002,
    is_on_view: false,
    id: 83905,
    image_id: "0ecc7b1a-70b3-7ac6-1a46-3401d0963aa6",
    title: "That Which I Should Have Done I Did Not Do (The Door)",
  },
  {
    _score: 50.32283,
    is_on_view: false,
    id: 185184,
    image_id: "678c7a7a-b8c7-2857-7b97-f3c3501b8b1c",
    title: "Venus de Milo with Drawers",
  },
  {
    _score: 50.1308,
    is_on_view: false,
    id: 146989,
    image_id: "4ae352f3-8a51-30cd-6e91-60683d21d12a",
    title: "Clown Torture",
  },
  {
    _score: 47.415897,
    is_on_view: false,
    id: 144361,
    image_id: "8b4abeed-c22b-1477-1e76-b303ac1415d1",
    title: "Earthly Paradise",
  },
];

export const regularResponse = {
  preference: null,
  pagination: {
    total: 65482,
    limit: 10,
    offset: 0,
    total_pages: 6549,
    current_page: 1,
  },
  data: regularPayload,
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
} as const;
