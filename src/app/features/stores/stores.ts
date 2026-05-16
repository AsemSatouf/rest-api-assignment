import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Cheapshark } from '../../core/services/cheapshark';

@Component({
  selector: 'app-stores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stores.html',
  styleUrl: './stores.css'
})
export class Stores implements OnInit {

  stores: any[] = [];
  loading = true;

  constructor(private api: Cheapshark) {}

  ngOnInit(): void {
    this.getStores();
  }

  getStores() {
    this.loading = true;

    this.api.getStores().subscribe({
      next: (res: any) => {
        this.stores = res;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      }
    });
  }
}