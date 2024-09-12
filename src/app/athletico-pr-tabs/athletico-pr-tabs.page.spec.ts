import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AthleticoPrTabsPage } from './athletico-pr-tabs.page';

describe('AthleticoPrTabsPage', () => {
  let component: AthleticoPrTabsPage;
  let fixture: ComponentFixture<AthleticoPrTabsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleticoPrTabsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
