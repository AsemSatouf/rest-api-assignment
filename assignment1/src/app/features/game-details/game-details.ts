import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Cheapshark } from '../../core/services/cheapshark';

@Component({
  selector: 'app-game-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-details.html',
  styleUrl: './game-details.css'
})
export class GameDetails implements OnInit {

  gameId = '';

  gameInfo: any;
  deals: any[] = [];
  cheapestDeal: any;

  loading = true;

  constructor(
    private route: ActivatedRoute,
    private api: Cheapshark
  ) {}

  ngOnInit(): void {

    this.gameId = this.route.snapshot.paramMap.get('id')!;

    this.getGameDetails();

  }

  getGameDetails() {

    this.loading = true;

    this.api.getGameDetails(this.gameId)
      .subscribe({

        next: (res: any) => {

          this.gameInfo = res.info;
          this.cheapestDeal = res.cheapestPriceEver;
          this.deals = res.deals;

          this.loading = false;

        },

        error: (err) => {

          console.log(err);
          this.loading = false;

        }

      });

  }

}