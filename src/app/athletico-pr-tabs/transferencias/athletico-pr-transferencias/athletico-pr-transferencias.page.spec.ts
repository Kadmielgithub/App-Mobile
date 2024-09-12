import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AthleticoPrTransferenciasPage } from './athletico-pr-transferencias.page';

describe('AthleticoPrTransferenciasPage', () => {
  let component: AthleticoPrTransferenciasPage;
  let fixture: ComponentFixture<AthleticoPrTransferenciasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleticoPrTransferenciasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
