import type HttpClient from "@/src/model/HttpClient";
import axios from "axios";

export default class Http implements HttpClient {
  httpRequest = axios.create({});
  readonly baseURL = `https://pokeapi.co/api/v2`;

  async get(url: string): Promise<any> {
    const response = await this.httpRequest.get(url);
    return response.data;
  }
}
