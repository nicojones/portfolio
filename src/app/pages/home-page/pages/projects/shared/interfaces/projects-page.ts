import {ProjectContent} from "~app/shared/interfaces";


export interface ProjectsPage {
  projects: ProjectContent[];
  title: string;
  description: string; // rich text description of the page
}
