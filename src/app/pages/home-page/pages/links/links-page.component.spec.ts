import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LinksPageComponent} from './links-page.component';
import {TestModule} from '~app/tests';


describe('HomePageComponent', () => {
  let component: LinksPageComponent;
  let fixture: ComponentFixture<LinksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LinksPageComponent],
      imports: [TestModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
