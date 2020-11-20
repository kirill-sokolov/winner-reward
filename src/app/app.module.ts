import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RewardGeneratorComponent } from './reward-generator/reward-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    RewardGeneratorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
