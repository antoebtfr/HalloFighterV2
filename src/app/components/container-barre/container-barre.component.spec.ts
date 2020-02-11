import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBarreComponent } from './container-barre.component';

describe('ContainerBarreComponent', () => {
  let component: ContainerBarreComponent;
  let fixture: ComponentFixture<ContainerBarreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerBarreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
