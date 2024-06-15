export type IChicagoPagination = {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
};

export type IChicagoApiResponse<T> = {
  info: {
    license_text: string;
    license_links: string[];
    version: string;
  };
  config: {
    iiif_url: string;
    website_url: string;
  };
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
    next_url: string;
  };
  data: T;
};
export type IChicagoArtwork = {
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  alt_titles: null;
  thumbnail: {
    lqip: string;
    width: number;
    height: number;
    alt_text: string;
  };
  main_reference_number: string;
  has_not_been_viewed_much: boolean;
  boost_rank: null;
  date_start: number;
  date_end: number;
  date_display: string;
  date_qualifier_title: string;
  date_qualifier_id: number;
  artist_display: string;
  place_of_origin: string;
  description: string | null;
  short_description: string | null;
  dimensions: string;
  dimensions_detail: {
    depth: null;
    width: number;
    height: number;
    diameter: null;
    clarification: string;
  }[];
  medium_display: string;
  inscriptions: null;
  credit_line: string;
  catalogue_display: null;
  publication_history: null;
  exhibition_history: null;
  provenance_text: null;
  edition: null;
  publishing_verification_level: string;
  internal_department_id: number;
  fiscal_year: null;
  fiscal_year_deaccession: null;
  is_public_domain: boolean;
  is_zoomable: boolean;
  max_zoom_window_size: number;
  copyright_notice: null;
  has_multimedia_resources: boolean;
  has_educational_resources: boolean;
  has_advanced_imaging: boolean;
  colorfulness: number;
  color: {
    h: number;
    l: number;
    s: number;
    percentage: number;
    population: number;
  };
  latitude: null;
  longitude: null;
  latlon: null;
  is_on_view: boolean;
  on_loan_display: null;
  gallery_title: null;
  gallery_id: null;
  nomisma_id: null;
  artwork_type_title: string;
  artwork_type_id: number;
  department_title: string;
  department_id: string;
  artist_id: number;
  artist_title: string;
  alt_artist_ids: never[];
  artist_ids: number[];
  artist_titles: string[];
  category_ids: string[];
  category_titles: string[];
  term_titles: string[];
  style_id: null;
  style_title: null;
  alt_style_ids: never[];
  style_ids: never[];
  style_titles: never[];
  classification_id: string;
  classification_title: string;
  alt_classification_ids: string[];
  classification_ids: string[];
  classification_titles: string[];
  subject_id: null;
  alt_subject_ids: never[];
  subject_ids: never[];
  subject_titles: never[];
  material_id: null;
  alt_material_ids: never[];
  material_ids: never[];
  material_titles: never[];
  technique_id: null;
  alt_technique_ids: never[];
  technique_ids: never[];
  technique_titles: never[];
  theme_titles: never[];
  image_id: string;
  alt_image_ids: never[];
  document_ids: never[];
  sound_ids: never[];
  video_ids: never[];
  text_ids: never[];
  section_ids: never[];
  section_titles: never[];
  site_ids: never[];
  suggest_autocomplete_all: (
    | {
        input: string[];
        contexts: {
          groupings: string[];
        };
        weight?: undefined;
      }
    | {
        input: string[];
        weight: number;
        contexts: {
          groupings: string[];
        };
      }
  )[];
  source_updated_at: string;
  updated_at: string;
  timestamp: string;
};
