import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {provideHttpClient, withFetch} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    FontAwesomeModule,
    provideHttpClient(withFetch()),
    CookieService
  ]
};
