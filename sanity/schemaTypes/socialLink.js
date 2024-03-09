export const SocialLinkSchema = {
  name: 'socialLink',
  title: 'Social Link',
  type: 'document',
  fields: [
    {
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'LinkedIn', value: 'linkedIn'},
        ],
      },
      initialValue: 'facebook',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'socialProfileUrl',
      title: 'Social Profile URL',
      type: 'string',
    },
  ],
}
