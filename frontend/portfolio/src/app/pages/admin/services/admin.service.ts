import { Injectable } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MainFormArray, MainFormGroup } from '~app/shared/classes';
import { MyWorkPage } from '~home-page/pages/my-work/shared/interfaces';
import { AboutPage } from '~home-page/pages/about/interfaces/about-page';
import { HomePage } from '~home-page/interfaces';
import { ContactMePage } from '~home-page/pages/contact-me/shared/interfaces';
import { LinkContent, ProjectContent, TextContent } from '~app/shared/interfaces';


@Injectable()
export class AdminService {

  public workForm: MainFormGroup<MyWorkPage> = new MainFormGroup<MyWorkPage>({
    title: new FormControl(null, Validators.required),
    description: new FormControl(''),
    projects: new MainFormArray<MyWorkPage['projects']>([])
  });

  public aboutForm: MainFormGroup<AboutPage> = new MainFormGroup<AboutPage>({
    title: new MainFormGroup<AboutPage['title']>({
      first: new FormControl(null, Validators.required),
      last: new FormControl(null, Validators.required),
      period: new FormControl(null),
      multi: new MainFormArray([])
    }),
    text: new MainFormArray<AboutPage['text']>([])
  });

  public homeForm: MainFormGroup<HomePage> = new MainFormGroup<HomePage>({
    mobileTap: new FormControl(null, Validators.required),
    title: new MainFormArray<HomePage['title']>([])
  });

  public contactForm: MainFormGroup<ContactMePage> = new MainFormGroup<ContactMePage>({
    title: new FormControl(null, Validators.required),
    text: new MainFormArray<ContactMePage['text']>([]),
    link: new MainFormArray<ContactMePage['link']>([])
  });

  public homeFormTitle (title: HomePage['title'][0]) {
    return new MainFormGroup<HomePage['title'][0]>({
      accent: new FormControl(title.accent),
      text: new FormControl(title.text),
      textHover: new FormControl(title.textHover),
      url: new FormControl(title.url),
      mini: new FormControl(title.mini)
    });
  }

  public textContent (textContent: Partial<TextContent>) {
    return new MainFormGroup<TextContent>({
      content: new FormControl(textContent.content, Validators.required),
      extra: new FormControl(textContent.extra),
      type: new FormControl(textContent.type, Validators.required)
    });
  }

  public linkContent (linkContent: Partial<LinkContent>) {
    return new MainFormGroup<LinkContent>({
      text: new FormControl(linkContent.text, Validators.required),
      url: new FormControl(linkContent.url, Validators.required),
      title: new FormControl(linkContent.title),
      icon: new FormControl(linkContent.icon)
    });
  }

  public projectContent (projectContent: Partial<ProjectContent>) {
    return new MainFormGroup<ProjectContent>({
      image: new FormControl(projectContent.image, Validators.required),
      content: new FormControl(projectContent.content, Validators.required),
      url: new FormControl(projectContent.url, Validators.required),
      summary: new FormControl(projectContent.summary, Validators.required),
      link: new FormControl(projectContent.link),
      title: new FormControl(projectContent.title, Validators.required)
    });
  }
}
