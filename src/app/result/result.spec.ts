import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { Result } from './result';

describe('Result', () => {
  let component: Result;
  let fixture: ComponentFixture<Result>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Result, RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Result);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
