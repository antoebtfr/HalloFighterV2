import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HUDComponent } from './hud.component';

describe('HUDComponent', () => {
  let component: HUDComponent;
  let fixture: ComponentFixture<HUDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HUDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HUDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
