import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { metaReducers } from './reducers';

import { CommonComponentsModule } from './modules/common/common.module';

import { AppComponent } from './app.component';
import { GuardPageComponent } from './guard/guard-component';

import { GuardService } from './guard/guard-service';

import { AppRoutingModule } from './app-routing.module';

const components = [
  AppComponent,
  GuardPageComponent
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, { metaReducers }),
    EffectsModule.forRoot([]),
    HttpModule,
    CommonComponentsModule
  ],
  providers: [ GuardService ],
  declarations: components,
  entryComponents: components,
  bootstrap: [ AppComponent ]
})
export class AppModule { }
