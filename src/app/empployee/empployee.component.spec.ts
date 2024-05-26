import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpployeeComponent } from './empployee.component';

describe('EmpployeeComponent', () => {
  let component: EmpployeeComponent;
  let fixture: ComponentFixture<EmpployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpployeeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
