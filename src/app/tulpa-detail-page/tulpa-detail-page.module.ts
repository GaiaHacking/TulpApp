import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TulpaDetailPagePageRoutingModule } from './tulpa-detail-page-routing.module';

import { TulpaDetailPagePage } from './tulpa-detail-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TulpaDetailPagePageRoutingModule
  ],
  declarations: [TulpaDetailPagePage]
})
export class TulpaDetailPagePageModule {}
