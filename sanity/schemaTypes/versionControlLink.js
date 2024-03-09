export const VersionControlLinkSchema = {
  name: 'versionControlLink',
  title: 'Version Control Link',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'GitHub', value: 'gitHub'},
          {title: 'GitLab', value: 'gitLab'},
          {title: 'Other', value: 'other'},
        ],
      },
      initialValue: 'gitHub',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: "URL",
      type: 'string',
    },
  ],
}
