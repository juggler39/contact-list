import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { httpInterceptorProviders } from '@helpers/http.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { counterReducer } from '@store/counter.reducer';
import { contactsReducer } from '@store/contacts.reducer';
import { ContactEffects } from '@store/contacts.effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ count: counterReducer, contacts: contactsReducer}),
    EffectsModule.forRoot([ContactEffects])
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
