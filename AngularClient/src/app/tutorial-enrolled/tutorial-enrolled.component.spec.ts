import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialEnrolledComponent } from './tutorial-enrolled.component';

describe('TutorialEnrolledComponent', () => {
  let component: TutorialEnrolledComponent;
  let fixture: ComponentFixture<TutorialEnrolledComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialEnrolledComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialEnrolledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
