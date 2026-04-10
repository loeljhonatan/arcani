import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NichoView } from './nicho-view';

describe('NichoView', () => {
  let component: NichoView;
  let fixture: ComponentFixture<NichoView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NichoView],
    }).compileComponents();

    fixture = TestBed.createComponent(NichoView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
