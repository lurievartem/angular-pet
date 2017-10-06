import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { routingComponents as NotFoundPageComponent } from './modules/common/common.module';

import { GuardService } from './guard/guard-service';
import { GuardPageComponent } from './guard/guard-component';

const routes: Routes = [
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: 'movies', loadChildren: './modules/movies/movies.module#MoviesModule' },
  { path: 'guard', component: GuardPageComponent, canActivate: [ GuardService ] },
  { path: '**', component: NotFoundPageComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
