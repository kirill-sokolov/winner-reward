import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RewardGeneratorComponent } from './reward-generator/reward-generator.component';
import { DialogService } from './dialog.service';
import { RewardDialogService } from './reward-dialog.service';
import { RewardPopupComponent } from './reward-popup/reward-popup.component';
import { PopupComponent } from './popup/popup.component';

@NgModule({
  declarations: [
    AppComponent,
    RewardGeneratorComponent,
    RewardPopupComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DialogService,
    RewardDialogService,
  ],
  // entryComponents: [ RewardPopupComponent ],
  bootstrap: [AppComponent]
})
export class AppModule { }
