import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-page/home-page.module').then(module => module.HomePageModule)
  },
  {
    path: 'detail/:movieId',
    loadChildren: () => import('./detail/detail.module').then(module => module.DetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
