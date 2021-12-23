import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterProductComponent } from './alter-lang.component';

describe('AlterProductComponent', () => {
  let component: AlterProductComponent;
  let fixture: ComponentFixture<AlterProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlterProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
