import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule  } from '@angular/forms';

import { ButtonGroupComponent } from './components/button-group/button-group.component';
import { SearchComponent } from './components/search/search.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ObservableContainerComponent } from './components/observable-container/observable-container.component';
import { DynamicInputComponent } from './components/dynamic-input/dynamic-input.component';
import { ShowErrorsComponent } from './components/show-errors/show-errors.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';

import { RatingDirective } from './directives/rating/rating.directive';

const components = [
  ButtonGroupComponent,
  SearchComponent,
  GalleryComponent,
  ObservableContainerComponent,
  DynamicInputComponent,
  ShowErrorsComponent,
  NotFoundPageComponent,
  RatingDirective,
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: components,
  exports: components
})
export class CommonComponentsModule {}

export const routingComponents = NotFoundPageComponent;
