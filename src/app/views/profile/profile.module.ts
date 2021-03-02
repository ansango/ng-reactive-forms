import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { UpdateComponent } from './update/update.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [ProfileComponent, UpdateComponent],
  imports: [CommonModule, ProfileRoutingModule],
})
export class ProfileModule {}
