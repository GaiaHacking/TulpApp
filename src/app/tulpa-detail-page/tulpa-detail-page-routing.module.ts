import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TulpaDetailPagePage } from './tulpa-detail-page.page';

const routes: Routes = [
  {
    path: '',
    component: TulpaDetailPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TulpaDetailPagePageRoutingModule {}
