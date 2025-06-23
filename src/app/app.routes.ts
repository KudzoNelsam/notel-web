import { Routes } from '@angular/router';
import {MainPageComponent} from './user/layout/main-page/main-page.component';
import {HomeComponent} from './user/pages/home/home.component';
import {ExplorerComponent} from './user/pages/explorer/explorer.component';
import {PATHS} from './routes/paths';

export const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: PATHS.EXPLORER,
        component: ExplorerComponent
      }
    ]
  }
];
