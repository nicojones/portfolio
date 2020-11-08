import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactMeComponent } from './contact-me.component';
import { TestModule } from '~app/tests';


describe('ContactMeComponent', () => {
  let component: ContactMeComponent;
  let fixture: ComponentFixture<ContactMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactMeComponent],
      imports: [TestModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
