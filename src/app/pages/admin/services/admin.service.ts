import {Injectable} from "@angular/core";
import {UntypedFormControl, Validators} from "@angular/forms";
import {MainFormArray, MainFormGroup} from "~app/shared/classes";
import {ProjectsPage} from "~home-page/pages/my-work/shared/interfaces";
import {AboutPage} from "~home-page/pages/about/interfaces/about-page";
import {HomePage} from "~home-page/interfaces";
import {ContactMePage} from "~home-page/pages/contact-me/shared/interfaces";
import {LinkContent, ProjectContent, TextContent} from "~app/shared/interfaces";


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

  public projectContent(projectContent: Partial<ProjectContent>) {
    return new MainFormGroup<ProjectContent>({
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
