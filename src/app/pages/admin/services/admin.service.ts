import {Injectable} from "@angular/core";
import {FormControl, UntypedFormArray, UntypedFormControl, Validators} from "@angular/forms";
import {MainFormArray, MainFormGroup} from "~app/shared/classes";
import {ProjectsPage} from "~home-page/pages/projects/shared/interfaces";
import {AboutPage} from "~home-page/pages/about/interfaces/about-page";
import {HomePage} from "~home-page/interfaces";
import {ContactMePage} from "~home-page/pages/contact-me/shared/interfaces";
import {LinkContent, ProjectContent, TextContent} from "~app/shared/interfaces";
import {LinksPage, LinksPageLink} from "~home-page/pages/links/interfaces";


@Injectable()
export class AdminService {

  public readonly colors: string[] = [
    "#27ae60",
    "#16a085",
    "#1abc9c",
    "#2ecc71",
    "#3498db",
    "#2980b9",
    "#9b59b6",
    "#8e44ad",
    "#c0392b",
    "#e74c3c",
    "#d35400",
    "#e67e22",
    "#f39c12",
    "#f1c40f"
  ];

  public workForm: MainFormGroup<ProjectsPage> = new MainFormGroup<ProjectsPage>({
    title: new UntypedFormControl(null, Validators.required),
    projects: new MainFormArray<ProjectsPage["projects"]>([])
  });

  public artForm: MainFormGroup<ProjectsPage> = new MainFormGroup<ProjectsPage>({
    title: new UntypedFormControl(null, Validators.required),
    projects: new MainFormArray<ProjectsPage["projects"]>([])
  });

  public blogForm: MainFormGroup<ProjectsPage> = new MainFormGroup<ProjectsPage>({
    title: new UntypedFormControl(null, Validators.required),
    projects: new MainFormArray<ProjectsPage["projects"]>([])
  });

  public onForm: MainFormGroup<ProjectsPage> = new MainFormGroup<ProjectsPage>({
    title: new UntypedFormControl(null, Validators.required),
    projects: new MainFormArray<ProjectsPage["projects"]>([])
  });

  public aboutForm: MainFormGroup<AboutPage> = new MainFormGroup<AboutPage>({
    title: new MainFormGroup<AboutPage["title"]>({
      first: new MainFormArray([]),
      multi: new MainFormArray([]),
      last: new MainFormArray([])
    }),
    text: new MainFormArray<AboutPage["text"]>([])
  });

  public homeForm: MainFormGroup<HomePage> = new MainFormGroup<HomePage>({
    pageTitle: new UntypedFormControl(null, Validators.required),
    mobileTap: new UntypedFormControl(null, Validators.required),
    title: new MainFormArray<HomePage["title"]>([])
  });

  public linksForm: MainFormGroup<LinksPage> = new MainFormGroup<LinksPage>({
    links: new UntypedFormArray([], Validators.required),
    title: new FormControl<LinksPage["title"]>(null)
  });

  public contactForm: MainFormGroup<ContactMePage> = new MainFormGroup<ContactMePage>({
    title: new UntypedFormControl(null, Validators.required),
    text: new MainFormArray<ContactMePage["text"]>([]),
    link: new MainFormArray<ContactMePage["link"]>([])
  });

  public homeFormTitle(title: HomePage["title"][0], index: number) {
    return new MainFormGroup<HomePage["title"][0]>({
      accent: new UntypedFormControl(title.accent),
      text: new UntypedFormControl(title.text),
      textHover: new UntypedFormControl(title.textHover),
      url: new UntypedFormControl(title.url),
      index: new UntypedFormControl(index + 1),
      mini: new UntypedFormControl(title.mini)
    });
  }

  public linkForm(link: LinksPageLink, index: number) {
    return new MainFormGroup<LinksPageLink>({
      hidden: new FormControl(link.hidden),
      image: new FormControl(link.image, Validators.required),
      name: new FormControl(link.name, Validators.required),
      external: new FormControl<boolean>(link.external),
      subTitle: new FormControl(link.subTitle, Validators.required),
      index: new FormControl(index + 1),
      url: new FormControl(link.url, Validators.required)
    });
  }

  public textContent(textContent: Partial<TextContent>) {
    return new MainFormGroup<TextContent>({
      content: new UntypedFormControl(textContent.content, Validators.required)
    });
  }

  public linkContent(linkContent: Partial<LinkContent>) {
    return new MainFormGroup<LinkContent>({
      text: new UntypedFormControl(linkContent.text, Validators.required),
      url: new UntypedFormControl(linkContent.url, Validators.required),
      title: new UntypedFormControl(linkContent.title),
      // blank: new FormControl(linkContent.blank),
      icon: new UntypedFormControl(linkContent.icon)
    });
  }

  public projectContent(projectContent: Partial<ProjectContent>, index: number) {
    return new MainFormGroup<ProjectContent>({
      index: new UntypedFormControl(index + 1),
      image: new UntypedFormControl(projectContent.image, Validators.required),
      content: new UntypedFormControl(projectContent.content, Validators.required),
      url: new UntypedFormControl(projectContent.url, Validators.required),
      summary: new UntypedFormControl(projectContent.summary, Validators.required),
      link: new UntypedFormControl(projectContent.link),
      textColor: new UntypedFormControl(projectContent.textColor),
      bgColor: new UntypedFormControl(projectContent.bgColor),
      title: new UntypedFormControl(projectContent.title, Validators.required)
    });
  }
}
