import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'second-page', loadChildren: './second-page/second-page.module#SecondPagePageModule' },
  { path: 'third-page', loadChildren: './third-page/third-page.module#ThirdPagePageModule' },
  { path: 'reg-page', loadChildren: './reg-page/reg-page.module#RegPagePageModule' },
  { path: 'third-page/:regForm.value.first,regForm.value.place,regForm.value.profession', loadChildren: './third-page/third-page.module#ThirdPagePageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
