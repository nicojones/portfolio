import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { slideIn } from '~app/shared/animations';
import { ActivatedRoute } from '@angular/router';
import { ContactMePage } from '~home-page/pages/contact-me/shared/interfaces';
import { AnimationSelector } from '~app/shared/enums';
import { Routes } from '~routes/routes';


@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slideIn(AnimationSelector.Text)]
})
export class ContactMeComponent implements OnInit {

  public readonly Routes = Routes;

  public readonly contactMe: ContactMePage;

  constructor (
    private route: ActivatedRoute
  ) {
    this.contactMe = this.route.snapshot.data.contactMe;
  }

  ngOnInit (): void {
  }

}
