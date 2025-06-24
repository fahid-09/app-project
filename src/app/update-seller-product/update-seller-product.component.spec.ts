import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSellerProductComponent } from './update-seller-product.component';

describe('UpdateSellerProductComponent', () => {
  let component: UpdateSellerProductComponent;
  let fixture: ComponentFixture<UpdateSellerProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateSellerProductComponent]
    });
    fixture = TestBed.createComponent(UpdateSellerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
