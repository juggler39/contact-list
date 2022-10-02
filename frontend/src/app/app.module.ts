import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { httpInterceptorProviders } from '@helpers/http.interceptor';
import { EffectsModule } from '@ngrx/effects';
import { contactsReducer } from '@store/contacts.reducer';
import { ContactEffects } from '@store/contacts.effects';
import { authReducer } from '@store/auth.reducer';
import { AuthEffects } from '@store/auth.effects';
import { LoginComponent } from '@components/login/login.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    StoreModule.forRoot({ contacts: contactsReducer, auth: authReducer }),
    EffectsModule.forRoot([ContactEffects, AuthEffects])
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
