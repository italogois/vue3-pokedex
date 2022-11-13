import type { Pokemon } from "./Pokemon";

export interface Result {
  name: string;
  url: string;
}

export interface RequestListPayload {
  count: number;
  next?: string;
  previous?: string;
  results: Result[];
}

export interface PokemonUseCase {
  getAllPokemons: () => Promise<RequestListPayload>;
  getAllTypes: () => Promise<RequestListPayload>;
  getTypeDetails: (id: string) => Promise<any>;
  getPokemon: (url: string) => Promise<Pokemon>;
}
