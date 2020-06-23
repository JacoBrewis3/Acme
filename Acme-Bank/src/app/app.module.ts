import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';

import { MatToolbar} from '@angular/material/toolbar';
import { MatCard, MatCardTitle, MatCardContent } from '@angular/material/card';
import { MatTable, MatHeaderRow } from '@angular/material/table';
import { MatButton } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/';
import { HttpClientModule } from '@angular/common/http';

import { AccountListComponent } from './account-list/account-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MatToolbar,
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatTable,
    MatHeaderRow,
    MatButton,
    AccountListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatRippleModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
