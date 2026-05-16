import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Cheapshark } from '../../core/services/cheapshark';
import { GameCardComponent } from '../../shared/components/game-card/game-card';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    GameCardComponent
  ],
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

  searchText = '';
  games: any[] = [];

  constructor(private api: Cheapshark) {}

  searchGames() {

    if(this.searchText.trim() === ''){
      return;
    }

    this.api.searchGames(this.searchText)
      .subscribe({

        next: (res: any) => {
          this.games = res;
          console.log(res);
        },

        error: (err) => {
          console.log(err);
        }

      });

  }

}