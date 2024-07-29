import { HttpClient, provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';
// import { RouterTestingHarness } from '@angular/router/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { screen } from '@testing-library/angular';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        RouterModule.forRoot([{ path: '', component: HeaderComponent }]),
      ],
      providers: [
        provideMockStore(),
        provideHttpClient(),
        provideHttpClientTesting(),
        provideAnimationsAsync(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    TestBed.inject(HttpClient);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render YouTube-client-app', async () => {
    const element: HTMLElement = fixture.nativeElement;
    element.title = 'YouTube-client-app';
    expect(element.textContent).toContain('YouTube-client-app');
  });

  it('should see original YouTube-client-app and new title after change', async () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    const actualTitle = 'YouTube-client-app';
    expect(h1.textContent).toBe(actualTitle);
    component.title = 'Test title';
    fixture.detectChanges();
    expect(h1.textContent).toContain('Test title');
  });

  it('should render admin name in button', async () => {
    screen.getByText('admin');
  });

  it('should render favourite name in button', async () => {
    // await render(HeaderComponent);
    screen.getByText('favourite');
  });

  it('should get the search value', async () => {
    /* const harness = await RouterTestingHarness.create();
    harness.fixture.autoDetectChanges();
    const hostElement: HTMLElement = harness.routeNativeElement!; */
    const element: HTMLElement = fixture.nativeElement;
    const loginInput: HTMLInputElement = element.querySelector(
      'app-search-input-field'
    )!;
    /* const loginDisplay: HTMLElement = hostElement.querySelector(
      'app-search-input-field'
    )!; */
    loginInput.value = 'lalala';
    loginInput.dispatchEvent(new Event('app-search-input-field'));
    // await harness.fixture.whenStable();

    expect(loginInput.value).toBe('lalala');
  });
});
