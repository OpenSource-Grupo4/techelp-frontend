import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProgressTaskComponent } from './view-progress-task.component';

describe('ViewProgressTaskComponent', () => {
  let component: ViewProgressTaskComponent;
  let fixture: ComponentFixture<ViewProgressTaskComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProgressTaskComponent]
    });
    fixture = TestBed.createComponent(ViewProgressTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
