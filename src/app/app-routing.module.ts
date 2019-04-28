import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'account-list',
    pathMatch: 'full'
  },
 
  { path: 'account-list',
  
  children: [
    {
      path: '',
      loadChildren: './account-list/account-list.module#AccountListPageModule' 
    },
    {path:':id',loadChildren:'./account-list/account-details/account-details.module#AccountDetailsPageModule'}
  ]

}
  
 
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
     
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
