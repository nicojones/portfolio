import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodreadsComponent } from './goodreads.component';
import { TestModule } from '~app/tests';
import { BooksService } from '~app/services';
import { CarouselModule } from '~app/modules/carousel';
import { ReadBooksResolver } from '~app/shared/resolvers/read-books.resolver';
import { ReadingBooksResolver } from '~app/shared/resolvers';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Book } from '~goodreads/shared/interfaces/book';
import { lastBook } from '~app/modules/book/last-book';


describe('GoodreadsComponent', () => {
  let component: GoodreadsComponent;
  let fixture: ComponentFixture<GoodreadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        GoodreadsComponent
      ],
      imports: [
        TestModule,
        CarouselModule
      ],
      providers: [
        { provide: ReadBooksResolver, useClass: FakeBooksResolver },
        { provide: ReadingBooksResolver, useClass: FakeBooksResolver },
        BooksService
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodreadsComponent);
    component = fixture.componentInstance;
    component.books = [{
      title: 'The Travels of Marco Polo',
      pages: '302',
      descr: 'His pilgrimage through the East began in 1271 when, still a teenager, he found hi',
      link: 'https://www.goodreads.com/book/show/11047892-the-travels-of-marco-polo',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1445619795l/11047892._SY500_.jpg'
    }, {
      title: 'Thinking, Fast and Slow',
      pages: '499',
      descr: 'In the highly anticipated Thinking, Fast and Slow, Kahneman takes us on a groundbreaki',
      link: 'https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow',
      image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1317793965l/11468377._SX500_.jpg'
    }, {
      title: 'Réquiem por un campesino español',
      pages: '69',
      descr: 'Réquiem por un campesino español recoge un dramático episodio de la guerra civil en un p',
      link: 'https://www.goodreads.com/book/show/754353.R_quiem_por_un_campesino_espa_ol',
      image: 'https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png'
    }];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

@Injectable()
export class FakeBooksResolver implements Resolve<unknown> {
  constructor () {}

  public resolve (): Observable<Book[]> {
    return of([lastBook])
  }
}
