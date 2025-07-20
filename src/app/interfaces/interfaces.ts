export interface Interfaces {
}
/* Singolo Character */
export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  image: string;
}

/* Info di paginazione */
export interface ApiInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

/* Rispota generale */
export interface ApiResponse {
  info: ApiInfo;
  results: Character[];
}
