import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixMonstreComponent } from './choix-monstre.component';

describe('ChoixMonstreComponent', () => {
  let component: ChoixMonstreComponent;
  let fixture: ComponentFixture<ChoixMonstreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixMonstreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixMonstreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
