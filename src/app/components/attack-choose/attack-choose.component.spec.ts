import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackChooseComponent } from './attack-choose.component';

describe('AttackChooseComponent', () => {
  let component: AttackChooseComponent;
  let fixture: ComponentFixture<AttackChooseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackChooseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
