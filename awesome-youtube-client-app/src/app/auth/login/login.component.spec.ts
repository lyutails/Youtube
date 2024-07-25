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
  let headerComponent: HeaderComponent;
  let loginComponent: LoginComponent;
  let headerFixture: ComponentFixture<HeaderComponent>;
  let loginFixture: ComponentFixture<LoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        LoginComponent,
        RouterModule.forRoot([{ path: '', component: HeaderComponent }]),
      ],
      providers: [
        provideMockStore(),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
      ],
    }).compileComponents();

    headerFixture = TestBed.createComponent(HeaderComponent);
    headerComponent = headerFixture.componentInstance;
    headerFixture.detectChanges();

    loginFixture = TestBed.createComponent(LoginComponent);
    loginComponent = loginFixture.componentInstance;
    loginFixture.detectChanges();

    TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(loginComponent).toBeDefined();
  });

  it('should render Login', async () => {
    const element: HTMLElement = loginFixture.nativeElement;
    expect(element.textContent).toContain('Login');
  });

  it('should render Password', async () => {
    screen.getByText('Password');
  });
});
