import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsDComponent } from './news-d.component';

describe('NewsDComponent', () => {
  let component: NewsDComponent;
  let fixture: ComponentFixture<NewsDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewsDComponent]
    });
    fixture = TestBed.createComponent(NewsDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
