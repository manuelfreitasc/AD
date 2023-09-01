import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdDetalhiComponent } from './prod-detalhi.component';

describe('ProdDetalhiComponent', () => {
  let component: ProdDetalhiComponent;
  let fixture: ComponentFixture<ProdDetalhiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdDetalhiComponent]
    });
    fixture = TestBed.createComponent(ProdDetalhiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
