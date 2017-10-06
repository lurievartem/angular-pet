import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MoviesPreviewContainer, MoviesDetailContainer, MovieEditContainer } from './containers';

const routes: Routes = [
  { path: ':movieID', component: MoviesDetailContainer },
  { path: ':movieID/edit', component: MovieEditContainer },
  { path: '', component: MoviesPreviewContainer }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class MoviesRoutingModule {}
