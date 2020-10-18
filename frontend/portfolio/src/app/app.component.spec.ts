import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AppTitleService } from '~app/services';
import { StarsComponent } from '~app/components/stars/stars.component';
import { TestModule } from '~app/tests';


describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TestModule
      ],
      declarations: [
        AppComponent,
        StarsComponent
      ],
      providers: [
        AppTitleService
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have set my title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    // @ts-ignore
    expect(app.title.titleService.getTitle()).toEqual('Nicolas Kupfer');
  });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('portfolio app is running!');
  // });
});
