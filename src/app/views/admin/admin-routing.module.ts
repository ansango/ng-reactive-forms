import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { NewActivityComponent } from './new-activity/new-activity.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'new', component: NewActivityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
