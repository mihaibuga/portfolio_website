export const ProfileSchema = {
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
    },
    {
      name: 'emailAddress',
      title: 'Email Address',
      type: 'string',
    },
    {
      name: 'versionControlProfileUrl',
      title: 'Version Control Profile URL',
      type: 'reference',
      to: [{type: 'customLink'}]
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'customLink'}]}],
    },
  ],
}
