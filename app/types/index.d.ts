interface NavLinkData {
  href: string;
  label: string;
}

interface SortByOptions {
  [key: string]: string;
}

interface Genre {
  id: number;
  name: string;
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average?: number;
  vote_count?: number;
}

interface GenreResponse {
  genres: Genre[];
}

interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

interface MainPageResponse {
  moviesData: MovieResponse;
  genres: Genre[];
}

interface RatedMovie {
  [key: string]: number;
}

interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  genres: Genre[];
  homepage: string;
  id: number;
  budget: number;
  revenue: number;
  runtime: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path?: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average?: number;
  vote_count?: number;
  videos: { results: Video[] };
  production_companies: ProductionCompany[];
}

interface Video {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: Date;
  id: string;
}

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface RatedContextData {
  ratedData: string;
  setRatedData: (value: string) => void;
}
