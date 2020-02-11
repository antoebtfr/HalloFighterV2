import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadpageComponent } from './loadpage.component';

describe('LoadpageComponent', () => {
  let component: LoadpageComponent;
  let fixture: ComponentFixture<LoadpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
