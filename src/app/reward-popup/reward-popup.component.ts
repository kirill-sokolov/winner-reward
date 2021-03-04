import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reward-popup',
  templateUrl: './reward-popup.component.html',
  styleUrls: ['./reward-popup.component.css']
})
export class RewardPopupComponent implements OnInit {
  @Input() public data;

  constructor() {
    console.log('RewardPopupComponent', this.data);
  }

  ngOnInit(): void {
    console.log('RewardPopupComponent::ngOnInit', this.data);
  }

}
