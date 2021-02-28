import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserLoggedCanActivate } from './shared/providers/user-logged.can-activate';

const routes: Routes = [
  {
    path: '',
    loadChildren: async () =>
      (await import('./views/activity/activity.module')).ActivityModule,
  },
  {
    path: 'favorites',
    loadChildren: async () =>
      (await import('./views/favorites/favorites.module')).FavoritesModule,
  },
  {
    path: 'my-activities',
    loadChildren: async () =>
      (await import('./views/my-activities/my-activities.module'))
        .MyActivitiesModule,
  },
  {
    path: 'profile',
    loadChildren: async () =>
      (await import('./views/profile/profile.module')).ProfileModule,
    canActivate: [UserLoggedCanActivate],
  },
  {
    path: 'admin',
    loadChildren: async () =>
      (await import('./views/admin/admin.module')).AdminModule,
  },
  {
    path: 'user',
    loadChildren: async () =>
      (await import('./views/user/user.module')).UserModule,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
