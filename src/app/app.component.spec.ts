import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BackArrowService } from './services/back-arrow/back-arrow.service';

describe('AppComponent', () => {
  let backArrowService: BackArrowService = new BackArrowService();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [{ provide: BackArrowService, useValue: backArrowService }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render toolbar', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('mat-toolbar')).not.toBeNull();
  });

  it('should render back arrow when back arrow service has value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;

    backArrowService.setVisible(true, 'expected');

    fixture.detectChanges();

    expect(
      compiled.querySelector('mat-toolbar mat-icon a[href="/expected"]')
    ).not.toBeNull();
  });

  it('should not render back arrow when back arrow service has value', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;

    fixture.detectChanges();

    expect(
      compiled.querySelector('mat-toolbar mat-icon a[href="/expected"]')
    ).toBeNull();
  });

  it('should render home link', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('a[routerLink="/"]')?.textContent).toContain(
      'Get Fit'
    );
  });

  it('should envelop router-outlet in app-container class', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const compiled = fixture.nativeElement as HTMLElement;

    expect(
      compiled.querySelector('div[class="app-container"] router-outlet')
    ).not.toBeNull();
  });
});
