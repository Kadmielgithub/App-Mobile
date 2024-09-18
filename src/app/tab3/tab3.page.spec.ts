import { ComponentFixture, TestBed } from '@angular/core/testing';
import { tab3 } from './tab3.page';

describe('tab3page', () => {
  let component: tab3;
  let fixture: ComponentFixture<tab3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ tab3 ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(tab3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

