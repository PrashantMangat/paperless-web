import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { mainRoutes } from './shared/const';

const routes: Routes = [
  {
    path: mainRoutes.HOME,
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)
  },

  {
    path: '**',
    redirectTo: mainRoutes.HOME
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
