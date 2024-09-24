interface genres {
  id: number;
  name: string;
}

interface Detail {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: genres[];
  homepage: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type { Detail };
