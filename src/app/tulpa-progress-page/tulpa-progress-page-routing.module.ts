import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TulpaProgressPagePage } from './tulpa-progress-page.page';

const routes: Routes = [
  {
    path: '',
    component: TulpaProgressPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TulpaProgressPagePageRoutingModule {}
