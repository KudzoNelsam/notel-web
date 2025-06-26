import { Routes } from '@angular/router';
import {MainPageComponent} from './user/layout/main-page/main-page.component';
import {HomeComponent} from './user/pages/home/home.component';
import {ExplorerComponent} from './user/pages/explorer/explorer.component';
import {PATHS} from './routes/paths';
import {AuthGuard} from './shared/guards/auth-guard';
import {LoginComponent} from './auth/login/login.component';

export const routes: Routes = [
  {
    path: PATHS.HOME,
    component: MainPageComponent,
    canActivate: [],
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: PATHS.EXPLORER,
        component: ExplorerComponent,
        canActivate: [AuthGuard]

      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: PATHS.HOME,
    pathMatch: 'full'
  }
];
