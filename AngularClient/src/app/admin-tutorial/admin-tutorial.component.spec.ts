import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTutorialComponent } from './admin-tutorial.component';

describe('AdminTutorialComponent', () => {
  let component: AdminTutorialComponent;
  let fixture: ComponentFixture<AdminTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminTutorialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
