import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { slideIn } from '~app/shared/animations';
import { ActivatedRoute } from '@angular/router';
import { MyWork } from '~home-page/pages/my-work/shared/interfaces';


@Component({
  selector: 'app-my-work',
  templateUrl: './my-work.component.html',
  styleUrls: ['./my-work.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn()]
})
export class MyWorkComponent implements OnInit {

  public readonly myWork: MyWork;

  constructor (
    private route: ActivatedRoute
  ) {
    this.myWork = this.route.snapshot.data.myWork;
  }

  ngOnInit (): void {
  }

}
