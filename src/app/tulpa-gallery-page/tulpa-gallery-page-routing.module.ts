import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TulpaGalleryPagePage } from './tulpa-gallery-page.page';

const routes: Routes = [
  {
    path: '',
    component: TulpaGalleryPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TulpaGalleryPagePageRoutingModule {}
