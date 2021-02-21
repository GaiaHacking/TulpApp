import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TulpaSettingsPagePage } from './tulpa-settings-page.page';

const routes: Routes = [
  {
    path: '',
    component: TulpaSettingsPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TulpaSettingsPagePageRoutingModule {}
