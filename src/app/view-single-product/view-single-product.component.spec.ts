import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSingleProductComponent } from './view-single-product.component';

describe('ViewSingleProductComponent', () => {
  let component: ViewSingleProductComponent;
  let fixture: ComponentFixture<ViewSingleProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewSingleProductComponent]
    });
    fixture = TestBed.createComponent(ViewSingleProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
