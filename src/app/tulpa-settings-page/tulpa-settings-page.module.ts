import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TulpaSettingsPagePageRoutingModule } from './tulpa-settings-page-routing.module';

import { TulpaSettingsPagePage } from './tulpa-settings-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TulpaSettingsPagePageRoutingModule
  ],
  declarations: [TulpaSettingsPagePage]
})
export class TulpaSettingsPagePageModule {}
