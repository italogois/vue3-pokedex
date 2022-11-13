import type { Pokemon } from "@/src/model/Pokemon";
import type {
  PokemonUseCase,
  RequestListPayload,
} from "@/src/model/PokemonServiceInterface";
import Http from "../axios/http";

export default class PokemonService implements PokemonUseCase {
  readonly http = new Http();

  getAllPokemons(): Promise<RequestListPayload> {
    return this.http.get(`${this.http.baseURL}/pokemon`);
  }

  getPokemon(url: string): Promise<Pokemon> {
    return this.http.get(url);
  }

  getAllTypes(): Promise<RequestListPayload> {
    return this.http.get(`${this.http.baseURL}/type`);
  }

  getTypeDetails(id: string): Promise<any> {
    return this.http.get(`${this.http.baseURL}/type/${id}`);
  }
}
