import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {FavorietenPage} from "../pages/favorieten/favorieten";
import { SettingsPage } from '../pages/settings/settings';
import { CategoryPage } from '../pages/category/category';

platformBrowserDynamic().bootstrapModule(AppModule);
