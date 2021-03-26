import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TulpaDetailPagePageRoutingModule } from './tulpa-detail-page-routing.module';

import { TulpaDetailPagePage } from './tulpa-detail-page.page';

import {NgxGaugeModule} from 'ngx-gauge';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TulpaDetailPagePageRoutingModule,
    NgxGaugeModule,
  ],
  declarations: [TulpaDetailPagePage]
})
export class TulpaDetailPagePageModule {}
