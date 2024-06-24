import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTechnicalComponent } from './search-technical.component';

describe('SearchTechnicalComponent', () => {
  let component: SearchTechnicalComponent;
  let fixture: ComponentFixture<SearchTechnicalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchTechnicalComponent]
    });
    fixture = TestBed.createComponent(SearchTechnicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
