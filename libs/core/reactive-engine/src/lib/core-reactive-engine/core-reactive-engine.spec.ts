import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoreReactiveEngine } from './core-reactive-engine';

describe('CoreReactiveEngine', () => {
  let component: CoreReactiveEngine;
  let fixture: ComponentFixture<CoreReactiveEngine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreReactiveEngine],
    }).compileComponents();

    fixture = TestBed.createComponent(CoreReactiveEngine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
