import { Component, OnInit } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {
  constructor(private dialogService: DialogService,) { }

  ngOnInit(): void {
  }

  public close(): void {
    this.dialogService.close();
  }
}
