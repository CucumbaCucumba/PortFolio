import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterSoftComponent } from './alter-soft.component';

describe('AlterProductComponent', () => {
  let component: AlterSoftComponent;
  let fixture: ComponentFixture<AlterSoftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterSoftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterSoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
