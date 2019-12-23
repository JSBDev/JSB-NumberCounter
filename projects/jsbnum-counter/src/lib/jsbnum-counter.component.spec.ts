import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JSBNumCounterComponent } from './jsbnum-counter.component';

describe('JSBNumCounterComponent', () => {
  let component: JSBNumCounterComponent;
  let fixture: ComponentFixture<JSBNumCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JSBNumCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JSBNumCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
