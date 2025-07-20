import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarfilterComponent } from './barfilter.component';

describe('BarfilterComponent', () => {
  let component: BarfilterComponent;
  let fixture: ComponentFixture<BarfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BarfilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BarfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
