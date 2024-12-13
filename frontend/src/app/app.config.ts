import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './modules/app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { LoginGuard } from './components/login/login.guard';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay()),
     LoginGuard, FormsModule, CommonModule]
};
