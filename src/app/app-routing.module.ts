import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tablinks/tablinks.module').then(m => m.TablinksPageModule)
  },
  {
    path: 'tulpae/:tulpID',
    loadChildren: () => import('./tulpa-detail-page/tulpa-detail-page.module').then(m => m.TulpaDetailPagePageModule)
  },
  {
    path: 'progress/:tulpID',
    loadChildren: () => import('./tulpa-progress-page/tulpa-progress-page.module').then(m => m.TulpaProgressPagePageModule)
  },
  {
    path: 'gallery/:tulpID',
    loadChildren: () => import('./tulpa-gallery-page/tulpa-gallery-page.module').then(m => m.TulpaGalleryPagePageModule)
  },
  {
    path: 'settings/:tulpID',
    loadChildren: () => import('./tulpa-settings-page/tulpa-settings-page.module').then(m => m.TulpaSettingsPagePageModule)
  },
  {
    path: 'chat/:tulpID',
    loadChildren: () => import('./tulpa-chat-page/tulpa-chat-page.module').then(m => m.TulpaChatPagePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
