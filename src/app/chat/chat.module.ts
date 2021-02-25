import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatPageRoutingModule } from './chat-routing.module';

import { ChatPage } from './chat.page';
import { TulpappTulpaChatCardComponent } from '../tulpapp-tulpa-chat-card/tulpapp-tulpa-chat-card.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatPageRoutingModule
  ],
  declarations: [ChatPage, TulpappTulpaChatCardComponent]
})
export class ChatPageModule {}
