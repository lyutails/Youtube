/* import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { provideMockStore } from '@ngrx/store/testing';

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
      providers: [provideMockStore()],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render YouTube-client-app', async () => {
    // await render(FooterComponent);
    // await screen.getByText('@lyutails');
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('YouTube-client-app');
  });
}); */
