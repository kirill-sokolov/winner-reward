import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardGeneratorComponent } from './reward-generator.component';

describe('RewardGeneratorComponent', () => {
  let component: RewardGeneratorComponent;
  let fixture: ComponentFixture<RewardGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardGeneratorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
