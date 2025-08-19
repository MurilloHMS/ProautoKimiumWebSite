import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { AuthInterceptor } from './Core/interceptors/auth-interceptor';
import { AuthService } from './Core/services/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
     provideHttpClient(withInterceptorsFromDi()),
     {
      provide : HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
     }
  ]
};