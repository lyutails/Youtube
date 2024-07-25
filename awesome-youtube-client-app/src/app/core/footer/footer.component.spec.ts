import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { render, screen } from '@testing-library/angular';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render lyutails', async () => {
    /* await render(FooterComponent);
    await screen.getByText('@lyutails'); */
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('@lyutails');
  });

  it('should render RS', async () => {
    /* await render(FooterComponent);
    await screen.getByText('@lyutails'); */
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('RS');
  });
});
