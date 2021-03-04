import {Injectable} from '@angular/core';
import {DialogService} from './dialog.service';
import {RewardPopupComponent} from './reward-popup/reward-popup.component';

@Injectable({
  providedIn: 'root'
})
export class RewardDialogService {

  private static dialog: any;

  constructor(private dialogService: DialogService) {
    console.debug('RewardDialogService');
  }

  public openDialog(data): void {
    console.debug('openDialog', data);
    if (RewardDialogService.dialog) {
      return RewardDialogService.dialog;
    } else {
      data.rewardStack.splice(0, 1); // todo: delete

      const dialog = this.dialogService.create(RewardPopupComponent, data);
      // const dialog: Dialog = this.dialogService.create()
      //   .clickToClose(true)
      //   .setEvent(event)
      //   .setComponent(RewardDialogService);
      //
      return RewardDialogService.dialog = this.dialogService.show();
      // .finally(() => {
      //   RewardDialogService.dialog = null;
      // });
    }
  }
}
