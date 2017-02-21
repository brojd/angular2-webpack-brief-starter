import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/core';

import './app/global_styles/index.pcss';

let module: any;

platformBrowserDynamic().bootstrapModule(AppModule);

if (module.hot) {
  module.hot.accept();
}