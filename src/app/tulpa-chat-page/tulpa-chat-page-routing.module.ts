import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TulpaChatPagePage } from './tulpa-chat-page.page';

const routes: Routes = [
  {
    path: '',
    component: TulpaChatPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TulpaChatPagePageRoutingModule {}
