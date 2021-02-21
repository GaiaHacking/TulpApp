import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TulpaProgressPagePageRoutingModule } from './tulpa-progress-page-routing.module';

import { TulpaProgressPagePage } from './tulpa-progress-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TulpaProgressPagePageRoutingModule
  ],
  declarations: [TulpaProgressPagePage]
})
export class TulpaProgressPagePageModule {}
