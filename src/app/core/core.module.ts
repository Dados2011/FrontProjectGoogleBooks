import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuAsideLeftComponent } from './components/menu-aside-left/menu-aside-left.component';
import { TopAsideLeftComponent } from './components/top-aside-left/top-aside-left.component';
import { AsideLeftComponent } from './containers/aside-left/aside-left.component';
import { CoreComponent } from './containers/core/core.component';
import { MainContentComponent } from './containers/main-content/main-content.component';
import { TopNavBarComponent } from './containers/top-nav-bar/top-nav-bar.component';
import { routes } from './routes.core';
import { AppPipesModule } from '../app-pipes/app-pipes.module';
import { AlertsModule } from '../alerts/alerts.module';

const COMPONENTS = [
  CoreComponent,
  TopNavBarComponent,
  AsideLeftComponent,
  MainContentComponent,
  TopAsideLeftComponent,
  MenuAsideLeftComponent
];

@NgModule({
  imports: [
    CommonModule,
    AppPipesModule,
    RouterModule.forChild(routes),
    AlertsModule
  ],
  declarations: COMPONENTS
})
export class CoreModule { }
