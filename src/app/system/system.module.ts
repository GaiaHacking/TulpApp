import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SystemPageRoutingModule } from './system-routing.module';

import { SystemPage } from './system.page';
import {TulpappTulpaCardComponent} from '../tulpapp-tulpa-card/tulpapp-tulpa-card.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SystemPageRoutingModule
  ],
  entryComponents: [TulpappTulpaCardComponent],
  declarations: [SystemPage, TulpappTulpaCardComponent]
})
export class SystemPageModule {}
