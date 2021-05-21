import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionSpaceComponent } from './question-space.component';

describe('QuestionSpaceComponent', () => {
  let component: QuestionSpaceComponent;
  let fixture: ComponentFixture<QuestionSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
