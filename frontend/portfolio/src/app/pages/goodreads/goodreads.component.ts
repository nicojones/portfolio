import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '~goodreads/shared/interfaces/book';
import { slide } from '~app/shared/animations';


@Component({
  selector: 'app-goodreads',
  templateUrl: './goodreads.component.html',
  styleUrls: ['./goodreads.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [slide()]
})
export class GoodreadsComponent implements OnInit {

  public books: Book[] = null;

  constructor (
    private activatedRoute: ActivatedRoute
  ) {
    this.books = this.activatedRoute.snapshot.data.books;
    console.log(this.books);
  }

  ngOnInit (): void {
  }

}