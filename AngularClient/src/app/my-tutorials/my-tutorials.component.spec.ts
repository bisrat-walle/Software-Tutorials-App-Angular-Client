import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTutorialsComponent } from './my-tutorials.component';

describe('MyTutorialsComponent', () => {
  let component: MyTutorialsComponent;
  let fixture: ComponentFixture<MyTutorialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTutorialsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTutorialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
