import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataAccessDbEntities } from './data-access-db-entities';

describe('DataAccessDbEntities', () => {
  let component: DataAccessDbEntities;
  let fixture: ComponentFixture<DataAccessDbEntities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataAccessDbEntities],
    }).compileComponents();

    fixture = TestBed.createComponent(DataAccessDbEntities);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
