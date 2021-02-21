import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TulpaGalleryPagePageRoutingModule } from './tulpa-gallery-page-routing.module';

import { TulpaGalleryPagePage } from './tulpa-gallery-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TulpaGalleryPagePageRoutingModule
  ],
  declarations: [TulpaGalleryPagePage]
})
export class TulpaGalleryPagePageModule {}
