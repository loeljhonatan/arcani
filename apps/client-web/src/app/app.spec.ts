import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ARCANI_API_URL } from '@arcani/shared-domain';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App], // Eliminamos NxWelcome
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: ARCANI_API_URL, useValue: 'http://localhost:3000' }
      ]
    }).compileComponents();
  });

  it('debe crearse el componente principal de ARCANI', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
