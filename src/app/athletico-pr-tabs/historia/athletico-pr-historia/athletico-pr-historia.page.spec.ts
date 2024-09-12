import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AthleticoPrHistoriaPage } from './athletico-pr-historia.page';

describe('AthleticoPrHistoriaPage', () => {
  let component: AthleticoPrHistoriaPage;
  let fixture: ComponentFixture<AthleticoPrHistoriaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleticoPrHistoriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
