import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AdminUploadImageComponent} from './admin-upload-image.component';
import {SharedModule} from '~app/shared';


describe('AdminUploadImageComponent', () => {
  let component: AdminUploadImageComponent;
  let fixture: ComponentFixture<AdminUploadImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminUploadImageComponent],
      imports: [SharedModule]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUploadImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
