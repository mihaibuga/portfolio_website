export const CustomLinkSchema = {
  name: 'customLink',
  title: 'Custom Link',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'platform',
      title: 'Platform',
      type: 'reference',
      to: [{type: 'platform'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'url',
      title: 'URL',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
  ],
}
