export interface Sea {
  key: string;
  label: string;
  population: number;
  statistics: number;
}

export interface SeaResponse {
  sea: Sea[];
}
