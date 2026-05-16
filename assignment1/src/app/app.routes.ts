import { Routes } from '@angular/router';

export const routes: Routes = [
{
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home)
},
{
    path:'search',
    loadComponent: () => import('./features/search/search').then(m => m.Search)
},
{
    path:'game/:id',
    loadComponent: () => import('./features/game-details/game-details').then(m => m.GameDetails)
},
{
    path:'stores',
    loadComponent: () => import('./features/stores/stores').then(m => m.Stores)
}

];
