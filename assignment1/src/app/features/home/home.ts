import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cheapshark } from '../../core/services/cheapshark';
import { GameCardComponent} from '../../shared/components/game-card/game-card';
import { Loading } from "../../shared/components/loading/loading";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GameCardComponent, Loading, GameCardComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home implements OnInit {

  deals: any[] = [];
  loading = true;

  constructor(private api: Cheapshark) {}

  ngOnInit(): void {
    this.getDeals();
  }

  getDeals() {
    this.loading = true;

    this.api.getDeals().subscribe({
      next: (res: any) => {
        this.deals = res;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    });
  }
}