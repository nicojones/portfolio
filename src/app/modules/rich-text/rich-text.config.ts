import {TinyMCE} from "tinymce";

type TinyMCEInitConfig = Parameters<TinyMCE["init"]>[0];

interface RichTextConfig extends TinyMCEInitConfig {
  registration: string;
}


export const richTextConfig: RichTextConfig = {
  registration: "b46wo57p4bao2qt3js3dkdi5zsx96j7ld04usyjjbtggmdzb",
  plugins: "lists link image media table code wordcount fullscreen visualblocks codesample",
  toolbar: "undo redo | styles | bold italic | outdent indent | image media codesample visualblocks | fullscreen",
  menubar: "view insert format tools table",
  content_style: `
      body#tinymce { display: flex; flex-direction: column }
      p { margin: 1rem 0; position: relative; display: block; width: 100%; }
      .project-image { max-width: 60%; margin: 0 auto; display: block; max-height: 600px }
      .project-image.center {max-width: 100%}
     `,
  image_description: false,
  image_class_list: [
    {title: "Normal", value: "project-image"},
    {title: "Centered", value: "project-image center"}
  ]
};
