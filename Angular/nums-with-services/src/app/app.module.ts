import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';

import { NumService } from './num.service';
import { SumComponent } from './sum/sum.component';

@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    SumComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NumService],
  bootstrap: [AppComponent]
})
export class AppModule { }
