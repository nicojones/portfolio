import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyWorkComponent } from './my-work.component';
import { SharedModule } from '~app/shared';
import { MyWorkResolver } from '~home-page/pages/my-work/shared/resolvers';
import { TestModule } from '~app/tests';
import { Resolve } from '@angular/router';
import { MyWork } from '~home-page/pages/my-work/shared/interfaces';
import { of } from 'rxjs';


describe('MyWorkComponent', () => {
  let component: MyWorkComponent;
  let fixture: ComponentFixture<MyWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MyWorkComponent
      ],
      imports: [
        TestModule,
        SharedModule
      ],
      providers: [
        { provide: MyWorkResolver, useClass: MyFakeWorkResolver }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MyFakeWorkResolver implements Resolve<MyWork> {
  public resolve () {
    return of<MyWork>(JSON.parse(
      '{"title":"what drives me?","text":["hello!<br>with <b>bold<\\/b> even...","hello!<br>with <b>bold<\\/b> even...","hello!<br>with <b>bold<\\/b> even...","hello!<br>with <b>bold<\\/b> even..."]}'));
  }
}
