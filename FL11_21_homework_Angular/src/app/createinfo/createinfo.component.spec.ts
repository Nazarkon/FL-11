import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinfoComponent } from './createinfo.component';

describe('CreateinfoComponent', () => {
  let component: CreateinfoComponent;
  let fixture: ComponentFixture<CreateinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
