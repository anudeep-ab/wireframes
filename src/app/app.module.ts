import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './transaction/transaction.component';

import { CollapseModule } from 'ngx-bootstrap/collapse';

import { MatExpansionModule } from '@angular/material/expansion';
import { Transaction2Component } from './transaction2/transaction2.component';

@NgModule({
  declarations: [AppComponent, TransactionComponent, Transaction2Component],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CollapseModule.forRoot(),
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
