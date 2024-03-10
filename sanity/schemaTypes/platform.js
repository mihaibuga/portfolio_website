export const PlatformSchema = {
  name: 'platform',
  title: 'Platform',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'platformLogo',
      title: 'Platform Logo',
      type: 'image',
      validation: (Rule) => Rule.required()
    }
  ],
}
