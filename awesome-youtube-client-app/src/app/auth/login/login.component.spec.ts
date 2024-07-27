import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';
import { screen } from '@testing-library/angular';

import { HeaderComponent } from '../../core/header/header.component';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        LoginComponent,
        RouterModule.forRoot([{ path: '', component: LoginComponent }]),
      ],
      providers: [
        provideMockStore(),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should render Login', async () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Login');
  });

  it('should render Password', async () => {
    screen.getByText('Password');
  });
});
