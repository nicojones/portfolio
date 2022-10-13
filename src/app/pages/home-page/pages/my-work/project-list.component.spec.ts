import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ProjectListComponent} from './project-list.component';
import {SharedModule} from '~app/shared';
import {ProjectListResolver} from '~home-page/pages/my-work/shared/resolvers';
import {TestModule} from '~app/tests';
import {Resolve} from '@angular/router';
import {MyWorkPage} from '~home-page/pages/my-work/shared/interfaces';
import {of} from 'rxjs';


describe('MyWorkComponent', () => {
  let component: ProjectListComponent;
  let fixture: ComponentFixture<ProjectListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProjectListComponent
      ],
      imports: [
        TestModule,
        SharedModule
      ],
      providers: [
        {provide: ProjectListResolver, useClass: MyFakeWorkResolver}
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

class MyFakeWorkResolver implements Resolve<MyWorkPage> {
  public resolve () {
    return of<MyWorkPage>(JSON.parse(
      '{"title":"what drives me?","text":["hello!<br>with <b>bold<\\/b> even...","hello!<br>with <b>bold<\\/b> even...","hello!<br>with <b>bold<\\/b> even...","hello!<br>with <b>bold<\\/b> even..."]}'));
  }
}
