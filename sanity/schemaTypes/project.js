export const ProjectSchema = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'liveUrl',
      type: 'string',
      title: 'Live URL',
    },
    {
      name: 'projectThumbnail',
      title: 'Project Thumbnail',
      type: 'image',
    },
    {
      name: 'projectCaptures',
      title: 'Project Captures',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    },
    {
      name: 'versionedProjectLink',
      title: "Versioned Project's URL",
      type: 'reference',
      to: [{type: 'customLink'}]
    },
  ],
}
