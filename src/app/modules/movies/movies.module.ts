import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule   } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CommonComponentsModule } from '../common/common.module';

import { reducers } from './movies.redux';
import { MoviesEffects } from './movies.effects';
import { MoviesRoutingModule } from './movies.routes';
import { MoviesService } from './movies.service';

import * as containers from './containers';
import * as components from './components';

import { MoviePipe } from './helpers/movies.pipe';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CommonComponentsModule,
    MoviesRoutingModule,
    StoreModule.forFeature('movies', reducers),
    EffectsModule.forFeature([ MoviesEffects ])
  ],
  declarations: [ ...containers, ...components, MoviePipe ],
  providers: [ MoviesService ]
})
export class MoviesModule {}
