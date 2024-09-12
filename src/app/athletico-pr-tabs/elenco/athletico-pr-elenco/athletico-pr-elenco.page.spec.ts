import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AthleticoPrElencoPage } from './athletico-pr-elenco.page';

describe('AthleticoPrElencoPage', () => {
  let component: AthleticoPrElencoPage;
  let fixture: ComponentFixture<AthleticoPrElencoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleticoPrElencoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
