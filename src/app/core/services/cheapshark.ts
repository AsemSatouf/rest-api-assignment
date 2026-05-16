import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class Cheapshark {

  private baseUrl = 'https://www.cheapshark.com/api/1.0';

  constructor(private http: HttpClient) {}

  getDeals() {
    return this.http.get(`${this.baseUrl}/deals`);
  }

  searchGames(title: string) {
    return this.http.get(`${this.baseUrl}/games?title=${title}`);
  }

  getGameDetails(id: string) {
    return this.http.get(`${this.baseUrl}/games?id=${id}`);
  }

  getStores() {
    return this.http.get(`${this.baseUrl}/stores`);
  }
}