import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { TreeComponent } from './app/app.component';

bootstrapApplication(TreeComponent, appConfig)
  .catch((err) => console.error(err));
