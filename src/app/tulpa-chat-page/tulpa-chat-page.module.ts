import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TulpaChatPagePageRoutingModule } from './tulpa-chat-page-routing.module';

import { TulpaChatPagePage } from './tulpa-chat-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TulpaChatPagePageRoutingModule
  ],
  declarations: [TulpaChatPagePage]
})
export class TulpaChatPagePageModule {}
